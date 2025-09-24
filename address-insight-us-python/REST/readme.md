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
# 1. Build the input
#
#  Required fields:
#               LicenseKey
#               IsLive
# 
# Optional:
#        BusinessName
#        Address1
#        Address2
#        City
#        State
#        Zip	
#        TestType

from get_address_insight_rest import get_address_insight

business_name = "Service Objects"
address1 = "136 W Canon Perdido St, Suite D"
address2 = ""
city = "Santa Barbara"
state = "CA"
zip = "93101"
test_type = "census_loose"

# 2. Call the method.
 response = get_address_insight(business_name, address1, address2, city, state, zip, test_type, license_key, is_live)

# 3. Inspect results.
print("\r\n* Address Insight *\r\n")
if response and not response.Error:
    print(f"Status                 : {response.Status}")
    print(f"Status Score           : {response.StatusScore}")
    print(f"Address Status         : {response.AddressStatus}")
    print(f"DPV                    : {response.DPV}")
    print(f"DPV Description        : {response.DPVDesc}")
    print(f"Address                : {response.Address}")
    print(f"Address Extra          : {response.AddressExtra}")
    print(f"City                   : {response.City}")
    print(f"State                  : {response.State}")
    print(f"Zip                    : {response.Zip}")
    print(f"Barcode Digits         : {response.BarcodeDigits}")
    print(f"Carrier Route          : {response.CarrierRoute}")
    print(f"Congress Code          : {response.CongressCode}")
    print(f"County Code            : {response.CountyCode}")
    print(f"County Name            : {response.CountyName}")
    print(f"Fragment House         : {response.FragmentHouse}")
    print(f"Fragment PreDir        : {response.FragmentPreDir}")
    print(f"Fragment Street        : {response.FragmentStreet}")
    print(f"Fragment Suffix        : {response.FragmentSuffix}")
    print(f"Fragment PostDir       : {response.FragmentPostDir}")
    print(f"Fragment Unit          : {response.FragmentUnit}")
    print(f"Fragment Unit Num      : {response.FragmentUnitNumber}")
    print(f"Fragment               : {response.Fragment}")
    print(f"Fragment PMB Prefix    : {response.FragmentPMBPrefix}")
    print(f"Fragment PMB Number    : {response.FragmentPMBNumber}")
    print(f"Corrections            : {response.Corrections}")
    print(f"Corrections Desc       : {response.CorrectionsDesc}")
    print(f"Address Notes          : {response.AddressNotes}")
    print(f"Address Notes Codes    : {response.AddressNotesCodes}")
    print(f"Geocode Status         : {response.GeocodeStatus}")
    print(f"Latitude               : {response.LocationLatitude}")
    print(f"Longitude              : {response.LocationLongitude}")
    print(f"Census Tract           : {response.CensusTract}")
    print(f"Census Block           : {response.CensusBlock}")
    print(f"Place Name             : {response.PlaceName}")
    print(f"Class FP               : {response.ClassFP}")
    print(f"SLDUST                 : {response.SLDUST}")
    print(f"SLDLST                 : {response.SLDLST}")
    print(f"County FIPS            : {response.CountyFIPS}")
    print(f"State FIPS             : {response.StateFIPS}")
    print(f"Geocode Notes          : {response.GeocodeNotes}")
    print(f"Geocode Notes Codes    : {response.GeocodeNotesCodes}")
    print(f"Zip Status             : {response.ZipStatus}")
    print(f"Zip Latitude           : {response.ZipLatitude}")
    print(f"Zip Longitude          : {response.ZipLongitude}")
    print(f"City Type              : {response.CityType}")
    print(f"City Alias Name        : {response.CityAliasName}")
    print(f"Area Code              : {response.AreaCode}")
    print(f"Time Zone              : {response.TimeZone}")
    print(f"Daylight Saving        : {response.DaylightSaving}")
    print(f"MSA                    : {response.MSA}")
    print(f"CBSA                   : {response.CBSA}")
    print(f"CBSA Div               : {response.CBSA_Div}")
    print(f"PMSA                   : {response.PMSA}")
    print(f"DMA                    : {response.DMA}")
    print(f"Zip Household Value    : {response.ZipHouseholdValue}")
    print(f"Persons Per Household  : {response.ZipPersonsPerHousehold}")
    print(f"Zip Household Income   : {response.ZipHouseholdIncome}")
    print(f"County Household Income: {response.CountyHouseholdIncome}")
    print(f"State Household Income : {response.StateHouseholdIncome}")
    print(f"Zip Notes              : {response.ZipNotes}")
    print(f"Zip Notes Codes        : {response.ZipNotesCodes}")
else:
    print("No address insight data found.")

if response.Error:
    print("\r\n* Error *\r\n")
    print(f"Error Type       : {response.Error.Type}")
    print(f"Error Type Code  : {response.Error.TypeCode}")
    print(f"Error Desc       : {response.Error.Desc}")
    print(f"Error Desc Code  : {response.Error.DescCode}")
```
