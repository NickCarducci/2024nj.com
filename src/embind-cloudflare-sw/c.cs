///<summary>
///
/// Script-Name: atm_locations
///</summary>

using System;
using System.Collections.Generic;
using MasterCard.Core;
using MasterCard.Core.Exceptions;
using MasterCard.Core.Model;
using MasterCard.Core.Security.OAuth;


namespace MasterCard.Api.Locations
{
  public class ATMLocationsTest
  {
    public static void Main()
    {
      string consumerKey = "your consumer key";   // You should copy this from "My Keys" on your project page e.g. UTfbhDCSeNYvJpLL5l028sWL9it739PYh6LU5lZja15xcRpY!fd209e6c579dc9d7be52da93d35ae6b6c167c174690b72fa
      string keyAlias = "keyalias";   // For production: change this to the key alias you chose when you created your production key
      string keyPassword = "keystorepassword";   // For production: change this to the key alias you chose when you created your production key
      var path = MasterCard.Core.Util.GetAssemblyPath(); // This returns the path to your assembly so it be used to locate your cert
      string certPath = "path to your .p12 private key file"; // e.g. /Users/yourname/project/sandbox.p12 | C:\Users\yourname\project\sandbox.p12

      ApiConfig.SetAuthentication(new OAuthAuthentication(consumerKey, certPath, keyAlias, keyPassword));   // You only need to set this once
      ApiConfig.SetDebug(true);   // Enable http wire logging
      ApiConfig.SetSandbox(true);

      try {
        RequestMap map = new RequestMap();
        map.Set ("PageOffset", "0");
        map.Set ("PageLength", "5");
        map.Set ("PostalCode", "11101");
        ATMLocations response = ATMLocations.Query(map);

        Out(response, "Atms.PageOffset"); //-->0
        Out(response, "Atms.TotalCount"); //-->26
        Out(response, "Atms.Atm[0].Location.Name"); //-->Sandbox ATM Location 1
        Out(response, "Atms.Atm[0].Location.Distance"); //-->0.93
        Out(response, "Atms.Atm[0].Location.DistanceUnit"); //-->MILE
        Out(response, "Atms.Atm[0].Location.Address.Line1"); //-->4201 Leverton Cove Road
        Out(response, "Atms.Atm[0].Location.Address.Line2"); //-->
        Out(response, "Atms.Atm[0].Location.Address.City"); //-->SPRINGFIELD
        Out(response, "Atms.Atm[0].Location.Address.PostalCode"); //-->11101
        Out(response, "Atms.Atm[0].Location.Address.CountrySubdivision.Name"); //-->UYQQQQ
        Out(response, "Atms.Atm[0].Location.Address.CountrySubdivision.Code"); //-->QQ
        Out(response, "Atms.Atm[0].Location.Address.Country.Name"); //-->UYQQQRR
        Out(response, "Atms.Atm[0].Location.Address.Country.Code"); //-->UYQ
        Out(response, "Atms.Atm[0].Location.Point.Latitude"); //-->38.76006576913497
        Out(response, "Atms.Atm[0].Location.Point.Longitude"); //-->-90.74615107952418
        Out(response, "Atms.Atm[0].Location.LocationType.Type"); //-->OTHER
        Out(response, "Atms.Atm[0].HandicapAccessible"); //-->NO
        Out(response, "Atms.Atm[0].Camera"); //-->NO
        Out(response, "Atms.Atm[0].Availability"); //-->UNKNOWN
        Out(response, "Atms.Atm[0].AccessFees"); //-->UNKNOWN
        Out(response, "Atms.Atm[0].Owner"); //-->Sandbox ATM 1
        Out(response, "Atms.Atm[0].SharedDeposit"); //-->NO
        Out(response, "Atms.Atm[0].SurchargeFreeAlliance"); //-->NO
        Out(response, "Atms.Atm[0].SurchargeFreeAllianceNetwork"); //-->DOES_NOT_PARTICIPATE_IN_SFA
        Out(response, "Atms.Atm[0].Sponsor"); //-->Sandbox
        Out(response, "Atms.Atm[0].SupportEMV"); //-->1
        Out(response, "Atms.Atm[0].InternationalMaestroAccepted"); //-->1
        // This sample shows looping through Atms.Atm
        Console.WriteLine("This sample shows looping through Atms.Atm");
        foreach(Dictionary<String, Object> item in (List<Dictionary<String, Object>>)response["Atms.Atm"]) {
          Out(item, "Location");
          Out(item, "HandicapAccessible");
          Out(item, "Camera");
          Out(item, "Availability");
          Out(item, "AccessFees");
          Out(item, "Owner");
          Out(item, "SharedDeposit");
          Out(item, "SurchargeFreeAlliance");
          Out(item, "SurchargeFreeAllianceNetwork");
          Out(item, "Sponsor");
          Out(item, "SupportEMV");
          Out(item, "InternationalMaestroAccepted");
        }

      } catch (ApiException e) {
        Err("HttpStatus: {0}", e.HttpStatus.ToString());
        Err("Message: {0}", e.Message);
        Err("ReasonCode: {0}", e.ReasonCode);
        Err("Source: {0}", e.Source);
      }

    }

    public static void Err(String message, String value)
    {
      Console.Error.WriteLine(message, value);
    }

    public static void Err(SmartMap response, String key)
    {
      Console.Error.WriteLine(key+"---> "+response[key]);
    }

    public static void Out(SmartMap response, String key)
    {
      Console.WriteLine(key+"---> "+response[key]);
    }

    public static void Out(Dictionary<String,Object> response, String key)
    {
      Console.WriteLine(key+"---> "+response[key]);
    }


  }
}

