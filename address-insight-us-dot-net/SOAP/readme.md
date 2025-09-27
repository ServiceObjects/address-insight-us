![Service Objects Logo](https://www.serviceobjects.com/wp-content/uploads/2021/05/SO-Logo-with-TM.gif "Service Objects Logo")

# AIN - Address Insight – US

DOTS Address Insight (“AIN”) is a publicly available XML web service that provides comprehensive address validation, location identification and appends demographic metadata information about a location in the US. 

The service provides validated, standardized and parsed address information, geocoding information, demographics information and other useful insights about an address in the United States.

## [Service Objects Website](https://serviceobjects.com)

# AIN - GetAddressInsight

A Status score is returned giving users an indication of how likely it is that the location exists especially useful for those out of the way rural addresses that may be hard to identify with a normal USPS database.

### [GetAddressInsight Developer Guide/Documentation](https://www.serviceobjects.com/docs/dots-address-insight-us/aius-operations/aius-getaddressinsight/)

## Library Usage

```
// 1 Instantiate the service wrapper
var ain = new GetAddressInsightValidation(true);

// 2 Provide your input data
//  Fields:
//      BusinessName
//      Address1
//      Address2
//      City
//      State
//      Zip	
//      TestType
//      LicenseKey
//      IsLive

// 3 Call the service
string BusinessName = "Service Objects";
string Address1     = "136 W Canon Perdido St, Suite D";
string Address2     = "";
string City         = "Santa Barbara";
string State        = "CA";
string Zip          = "93101";
string TestType     = "census_loose";
string licenseKey   = "YOUR_LICENSE_KEY";

ResponseObject response = ain.GetAddressInsight(BusinessName, Address1, Address2, City, State, Zip, TestType, licenseKey).Result;

// 4. Inspect results.
if (response != null && !response.ContainsKey("Error"))
{
    Console.WriteLine("\r\n* Address Insight *\r\n");
    Console.WriteLine($"Status                 : {(response["AddressInsightResponse"][0]["Status"])}");
    Console.WriteLine($"StatusScore            : {(response["AddressInsightResponse"][0]["StatusScore"])}");
    Console.WriteLine($"AddressStatus          : {(response["AddressInsightResponse"][0]["AddressStatus"])}");
    Console.WriteLine($"DPV                    : {(response["AddressInsightResponse"][0]["DPV"])}");
    Console.WriteLine($"DPVDesc                : {(response["AddressInsightResponse"][0]["DPVDesc"])}");
    Console.WriteLine($"Address                : {(response["AddressInsightResponse"][0]["Address"])}");
    Console.WriteLine($"AddressExtra           : {(response["AddressInsightResponse"][0]["AddressExtra"])}");
    Console.WriteLine($"City                   : {(response["AddressInsightResponse"][0]["City"])}");
    Console.WriteLine($"State                  : {(response["AddressInsightResponse"][0]["State"])}");
    Console.WriteLine($"Zip                    : {(response["AddressInsightResponse"][0]["Zip"])}");
    Console.WriteLine($"BarcodeDigits          : {(response["AddressInsightResponse"][0]["BarcodeDigits"])}");
    Console.WriteLine($"CarrierRoute           : {(response["AddressInsightResponse"][0]["CarrierRoute"])}");
    Console.WriteLine($"CongressCode           : {(response["AddressInsightResponse"][0]["CongressCode"])}");
    Console.WriteLine($"CountyName             : {(response["AddressInsightResponse"][0]["CountyName"])}");
    Console.WriteLine($"FragmentHouse          : {(response["AddressInsightResponse"][0]["FragmentHouse"])}");
    Console.WriteLine($"FragmentPreDir         : {(response["AddressInsightResponse"][0]["FragmentPreDir"])}");
    Console.WriteLine($"FragmentStreet         : {(response["AddressInsightResponse"][0]["FragmentStreet"])}");
    Console.WriteLine($"FragmentSuffix         : {(response["AddressInsightResponse"][0]["FragmentSuffix"])}");
    Console.WriteLine($"FragmentPostDir        : {(response["AddressInsightResponse"][0]["FragmentPostDir"])}");
    Console.WriteLine($"FragmentUnit           : {(response["AddressIightResponse"][0]["FragmentUnit"])}");
    Console.WriteLine($"FragmentUnitNumber     : {(response["AddressInsightResponse"][0]["FragmentUnitNumber"])}");
    Console.WriteLine($"FragmentPMBPrefix      : {(response["AddressInsightResponse"][0]["FragmentPMBPrefix"])}");
    Console.WriteLine($"FragmentPMBNumber      : {(response["AddressInsightResponse"][0]["FragmentPMBNumber"])}");
    Console.WriteLine($"Corrections            : {(response["AddressInsightResponse"][0]["Corrections"])}");
    Console.WriteLine($"CorrectionsDesc        : {(response["AddressInsightResponse"][0]["CorrectionsDesc"])}");
    Console.WriteLine($"AddressNotes           : {(response["AddressInsightResponse"][0]["AddressNotes"])}");
    Console.WriteLine($"AddressNotesCodes      : {(response["AddressInsightResponse"][0]["AddressNotesCodes"])}");
    Console.WriteLine($"GeocodeStatus          : {(response["AddressInsightResponse"][0]["GeocodeStatus"])}");
    Console.WriteLine($"LocationLatitude       : {(response["AddressInsightResponse"][0]["LocationLatitude"])}");
    Console.WriteLine($"LocationLongitude      : {(response["AddressInsightResponse"][0]["LocationLongitude"])}");
    Console.WriteLine($"CensusTract            : {(response["AddressInsightResponse"][0]["CensusTract"])}");
    Console.WriteLine($"CensusBlock            : {(response["AddressInsightResponse"][0]["CensusBlock"])}");
    Console.WriteLine($"PlaceName              : {(response["AddressInsightResponse"][0]["PlaceName"])}");
    Console.WriteLine($"ClassFP                : {(response["AddressInsightResponse"][0]["ClassFP"])}");
    Console.WriteLine($"SLDUST                 : {(response["AddressInsightResponse"][0]["SLDUST"])}");
    Console.WriteLine($"SLDLST                 : {(response["AddressInsightResponse"][0]["SLDLST"])}");
    Console.WriteLine($"CountyFIPS             : {(response["AddressInsightResponse"][0]["CountyFIPS"])}");
    Console.WriteLine($"StateFIPS              : {(response["AddressInsightResponse"][0]["StateFIPS"])}");
    Console.WriteLine($"GeocodeNotes           : {(response["AddressInsightResponse"][0]["GeocodeNotes"])}");
    Console.WriteLine($"GeocodeNotesCodes      : {(response["AddressInsightResponse"][0]["GeocodeNotesCodes"])}");
    Console.WriteLine($"ZipStatus              : {(response["AddressInsightResponse"][0]["ZipStatus"])}");
    Console.WriteLine($"ZipLatitude            : {(response["AddressInsightResponse"][0]["ZipLatitude"])}");
    Console.WriteLine($"ZipLongitude           : {(response["AddressInsightResponse"][0]["ZipLongitude"])}");
    Console.WriteLine($"CityType               : {(response["AddressInsightResponse"][0]["CityType"])}");
    Console.WriteLine($"CityAliasName          : {(response["AddressInsightResponse"][0]["CityAliasName"])}");
    Console.WriteLine($"AreaCode               : {(response["AddressInsightResponse"][0]["AreaCode"])}");
    Console.WriteLine($"TimeZone               : {(response["AddressInsightResponse"][0]["TimeZone"])}");
    Console.WriteLine($"DaylightSaving         : {(response["AddressInsightResponse"][0]["DaylightSaving"])}");
    Console.WriteLine($"MSA                    : {(response["AddressInsightResponse"][0]["MSA"])}");
    Console.WriteLine($"CBSA                   : {(response["AddressInsightResponse"][0]["CBSA"])}");
    Console.WriteLine($"CBSA_Div               : {(response["AddressInsightResponse"][0]["CBSA_Div"])}");
    Console.WriteLine($"PMSA                   : {(response["AddressInsightResponse"][0]["PMSA"])}");
    Console.WriteLine($"DMA                    : {(response["AddressInsightResponse"][0]["DMA"])}");
    Console.WriteLine($"ZipHouseholdValue      : {(response["AddressInsightResponse"][0]["ZipHouseholdValue"])}");
    Console.WriteLine($"ZipPersonsPerHousehold : {(response["AddressInsightResponse"][0]["ZipPersonsPerHousehold"])}");
    Console.WriteLine($"ZipHouseholdIncome     : {(response["AddressInsightResponse"][0]["ZipHouseholdIncome"])}");
    Console.WriteLine($"CountyHouseholdIncome  : {(response["AddressInsightResponse"][0]["CountyHouseholdIncome"])}");
    Console.WriteLine($"StateHouseholdIncome   : {(response["AddressInsightResponse"][0]["StateHouseholdIncome"])}");
    Console.WriteLine($"ZipNotes               : {(response["AddressInsightResponse"][0]["ZipNotes"])}");
    Console.WriteLine($"ZipNotesCodes          : {(response["AddressInsightResponse"][0]["ZipNotesCodes"])}");
}
else
{
    Console.WriteLine("\r\n* Error *\r\n");
    if (response?.TryGetValue("Error", out var errorObject) == true && errorObject != null)
    {
        Console.WriteLine($"TypeDesc : {(response["Error"][0]["TypeDesc"])}");
        Console.WriteLine($"TypeCode : {(response["Error"][0]["TypeCode"])}");
        Console.WriteLine($"Desc     : {(response["Error"][0]["Desc"])}");
        Console.WriteLine($"DescCode : {(response["Error"][0]["DescCode"])}");
    }
    else
    {
        Console.WriteLine("Unknown error occurred.");
    }
}
```
