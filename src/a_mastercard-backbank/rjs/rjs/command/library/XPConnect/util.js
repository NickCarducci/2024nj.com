export const XPCUtil = {
  isWindows: "@mozilla.org/windows-registry-key;1" in Cc,
  cwd: function () {
    return FileUtils.getFile("CurWorkD", []).path;
  },

  //Remove . and .. from paths, normalize on front slashes
  normalize: function (path) {
    //There has to be an easier way to do this.
    var i,
      part,
      ary,
      firstChar = path.charAt(0);

    if (firstChar !== "/" && firstChar !== "\\" && path.indexOf(":") === -1) {
      //A relative path. Use the current working directory.
      path = xpcUtil.cwd() + "/" + path;
    }

    ary = path.replace(/\\/g, "/").split("/");

    for (i = 0; i < ary.length; i += 1) {
      part = ary[i];
      if (part === ".") {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === "..") {
        ary.splice(i - 1, 2);
        i -= 2;
      }
    }
    return ary.join("/");
  },

  xpfile: function (path) {
    var fullPath;
    try {
      fullPath = xpcUtil.normalize(path);
      if (xpcUtil.isWindows) {
        fullPath = fullPath.replace(/\//g, "\\");
      }
      return new FileUtils.File(fullPath);
    } catch (e) {
      throw new Error((fullPath || path) + " failed: " + e);
    }
  },

  readFile: function (/*String*/ path, /*String?*/ encoding) {
    //A file read function that can deal with BOMs
    encoding = encoding || "utf-8";

    var inStream,
      convertStream,
      readData = {},
      fileObj = xpcUtil.xpfile(path);

    //XPCOM, you so crazy
    try {
      inStream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(
        Ci.nsIFileInputStream
      );
      inStream.init(fileObj, 1, 0, false);

      convertStream = Cc[
        "@mozilla.org/intl/converter-input-stream;1"
      ].createInstance(Ci.nsIConverterInputStream);
      convertStream.init(
        inStream,
        encoding,
        inStream.available(),
        Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER
      );

      convertStream.readString(inStream.available(), readData);
      return readData.value;
    } catch (e) {
      throw new Error(((fileObj && fileObj.path) || "") + ": " + e);
    } finally {
      if (convertStream) {
        convertStream.close();
      }
      if (inStream) {
        inStream.close();
      }
    }
  }
};
