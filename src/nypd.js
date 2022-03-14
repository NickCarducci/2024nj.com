import React from "react";
const nypd = {
  "2000": {
    MURDER: 673,
    RAPE: 2068,
    ROBBERY: 32562,
    FELONYASSAULT: 25924,
    BURGLARY: 38352,
    GRANDLARCENY: 49631,
    GRANDLARCENYMOTOR: 35442
  },
  "2001": {
    MURDER: 649,
    RAPE: 1981,
    ROBBERY: 28202,
    FELONYASSAULT: 23453,
    BURGLARY: 32763,
    GRANDLARCENY: 46329,
    GRANDLARCENYMOTOR: 29531
  },
  "2002": {
    MURDER: 587,
    RAPE: 2144,
    ROBBERY: 27229,
    FELONYASSAULT: 21147,
    BURGLARY: 31275,
    GRANDLARCENY: 45771,
    GRANDLARCENYMOTOR: 26656
  },
  "2003": {
    MURDER: 597,
    RAPE: 2070,
    ROBBERY: 25989,
    FELONYASSAULT: 19139,
    BURGLARY: 29110,
    GRANDLARCENY: 46751,
    GRANDLARCENYMOTOR: 23413
  },
  "2004": {
    MURDER: 570,
    RAPE: 1905,
    ROBBERY: 24373,
    FELONYASSAULT: 18622,
    BURGLARY: 26976,
    GRANDLARCENY: 48763,
    GRANDLARCENYMOTOR: 20884
  },
  "2005": {
    MURDER: 539,
    RAPE: 1858,
    ROBBERY: 24722,
    FELONYASSAULT: 17750,
    BURGLARY: 24117,
    GRANDLARCENY: 48243,
    GRANDLARCENYMOTOR: 18246
  },
  "2006": {
    MURDER: 596,
    RAPE: 1525,
    ROBBERY: 23739,
    FELONYASSAULT: 17309,
    BURGLARY: 23143,
    GRANDLARCENY: 46625,
    GRANDLARCENYMOTOR: 15745
  },
  "2007": {
    MURDER: 496,
    RAPE: 1351,
    ROBBERY: 21809,
    FELONYASSAULT: 17493,
    BURGLARY: 21762,
    GRANDLARCENY: 44924,
    GRANDLARCENYMOTOR: 13174
  },
  "2008": {
    MURDER: 523,
    RAPE: 1299,
    ROBBERY: 22401,
    FELONYASSAULT: 16284,
    BURGLARY: 20725,
    GRANDLARCENY: 44242,
    GRANDLARCENYMOTOR: 12482
  },
  "2009": {
    MURDER: 471,
    RAPE: 1205,
    ROBBERY: 18601,
    FELONYASSAULT: 16773,
    BURGLARY: 19430,
    GRANDLARCENY: 39580,
    GRANDLARCENYMOTOR: 10670
  },
  "2010": {
    MURDER: 536,
    RAPE: 1373,
    ROBBERY: 19486,
    FELONYASSAULT: 16956,
    BURGLARY: 18600,
    GRANDLARCENY: 37835,
    GRANDLARCENYMOTOR: 10329
  },
  "2011": {
    MURDER: 515,
    RAPE: 1420,
    ROBBERY: 19717,
    FELONYASSAULT: 18482,
    BURGLARY: 18720,
    GRANDLARCENY: 38501,
    GRANDLARCENYMOTOR: 9314
  },
  "2012": {
    MURDER: 419,
    RAPE: 1445,
    ROBBERY: 20144,
    FELONYASSAULT: 19381,
    BURGLARY: 19168,
    GRANDLARCENY: 42497,
    GRANDLARCENYMOTOR: 8093
  },
  "2013": {
    MURDER: 335,
    RAPE: 1378,
    ROBBERY: 19128,
    FELONYASSAULT: 20297,
    BURGLARY: 17429,
    GRANDLARCENY: 45368,
    GRANDLARCENYMOTOR: 7400
  },
  "2014": {
    MURDER: 333,
    RAPE: 1352,
    ROBBERY: 16539,
    FELONYASSAULT: 20207,
    BURGLARY: 16765,
    GRANDLARCENY: 43862,
    GRANDLARCENYMOTOR: 7664
  },
  "2015": {
    MURDER: 352,
    RAPE: 1438,
    ROBBERY: 16931,
    FELONYASSAULT: 20270,
    BURGLARY: 15125,
    GRANDLARCENY: 44005,
    GRANDLARCENYMOTOR: 7332
  },
  "2016": {
    MURDER: 335,
    RAPE: 1438,
    ROBBERY: 15500,
    FELONYASSAULT: 20847,
    BURGLARY: 12990,
    GRANDLARCENY: 44279,
    GRANDLARCENYMOTOR: 6327
  },
  "2017": {
    MURDER: 292,
    RAPE: 1449,
    ROBBERY: 13956,
    FELONYASSAULT: 20052,
    BURGLARY: 12083,
    GRANDLARCENY: 43150,
    GRANDLARCENYMOTOR: 5676
  },
  "2018": {
    MURDER: 295,
    RAPE: 1794,
    ROBBERY: 12913,
    FELONYASSAULT: 20208,
    BURGLARY: 11687,
    GRANDLARCENY: 43558,
    GRANDLARCENYMOTOR: 5428
  },
  "2019": {
    MURDER: 319,
    RAPE: 1755,
    ROBBERY: 13371,
    FELONYASSAULT: 20698,
    BURGLARY: 10783,
    GRANDLARCENY: 43250,
    GRANDLARCENYMOTOR: 5430
  },
  "2020": {
    MURDER: 468,
    RAPE: 1427,
    ROBBERY: 13106,
    FELONYASSAULT: 20572,
    BURGLARY: 15478,
    GRANDLARCENY: 35505,
    GRANDLARCENYMOTOR: 9037
  },
  "2021": {
    MURDER: 488,
    RAPE: 1491,
    ROBBERY: 13831,
    FELONYASSAULT: 22835,
    BURGLARY: 12811,
    GRANDLARCENY: 40870,
    GRANDLARCENYMOTOR: 10415
  }
};

class NYPD extends React.Component {
  constructor(props) {
    super(props);

    let testingData = [];
    let testing = [];
    let noData = [];
    let date = [];
    let data = {};
    let dataData = {};
    Object.keys(nypd).map((yr, i) => {
      const year = Number(yr);
      date.push(year);
      const dta = Object.values(nypd)[i];
      Object.keys(dta).forEach((label) => {
        if (!data[label]) data[label] = [];
        if (!dataData[label]) dataData[label] = [];
        if (!dta[label]) dta[label] = [];
        data[label].push(dta[label]);
        dataData[label].push([year, dta[label]]);
      });
      return noData.push([year, 0]);
    });
    /*let dataDataData = {};
    Object.keys(dataData).forEach((label, i) => {
      const yearData = Object.values(label)[i];
      if (!dataDataData[yearData[0]]) dataDataData[yearData[0]] = 0;
      dataDataData[yearData[0]] = dataDataData[yearData[0]] + yearData[1];
    });*/
    var all = [];
    Object.values(data).map((data) => all.push(...data));
    var highDate = Math.max(...date);
    var lowTesting = Math.min(...all);
    var lowDate = Math.min(...date);
    var highTesting = Math.max(...all);
    noData.sort((a, b) => a[0] - b[0]);
    testingData.sort((a, b) => a[0] - b[0]);
    //console.log(dataData);
    var state = {
      ...dataData,
      highTesting,
      testingData,
      noData,
      yAxis: highTesting - lowTesting,
      xAxis: highDate - lowDate,
      lowTesting,
      highDate,
      lowDate
    };
    this.state = state;
  }
  render() {
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };

    const lineheight = this.props.lineheight ? this.props.lineheight : 200;
    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: lineheight + 10,
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };
    //console.log(this.state.MURDER);
    const coefficience = (this.props.lastWidth - 60) / this.props.lastWidth;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      0
    ]);
    const MURDER = this.state.MURDER.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    const RAPE = this.state.RAPE.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    const ROBBERY = this.state.ROBBERY.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    const FELONYASSAULT = this.state.FELONYASSAULT.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    const BURGLARY = this.state.BURGLARY.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    const GRANDLARCENY = this.state.GRANDLARCENY.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    const GRANDLARCENYMOTOR = this.state.GRANDLARCENYMOTOR.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        coefficience *
        this.props.lastWidth,
      ((y - this.state.lowTesting) / this.state.yAxis) * lineheight
    ]);
    return (
      <div
        style={{
          width: "100%",
          height: lineheight + 80,
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            position: "relative",
            height: "36px",
            overflowX: "auto",
            overflowY: "hidden",
            width: "100%",
            padding: "4px 8px",
            backgroundColor: "rgba(250,250,250,.6)"
          }}
        >
          <div
            style={{
              width: "max-content",
              position: "absolute",
              height: "100%"
            }}
          >
            incidents major 7 NYPD:
            {this.state.lowTesting}-{this.state.highTesting}
            <br />
            {this.state.lowDate}
            &nbsp;-&nbsp;
            {this.state.highDate}
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            position: "relative",
            height: lineheight
          }}
        >
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={4}
                    height={4}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={0}
                    key={i}
                  />
                )
            )}
            {MURDER.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="red"
                    fill="red"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {RAPE.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="yellow"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {ROBBERY.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="white"
                    fill="white"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {FELONYASSAULT.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="orange"
                    fill="orange"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {BURGLARY.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="white"
                    fill="white"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {GRANDLARCENY.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="white"
                    fill="white"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
            {GRANDLARCENYMOTOR.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={2}
                    stroke="white"
                    fill="white"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
        {/*<div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            width: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          ></div>
          </div>*/}
      </div>
    );
  }
}

export default NYPD;
