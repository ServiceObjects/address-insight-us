import sys
import os

sys.path.insert(0, os.path.abspath("../address-insight-us-python/SOAP"))

from get_address_insight_soap import GetAddressInsightSoap


def get_address_insight_soap_sdk_go(is_live_key: bool, license: str) -> None:
    print("\r\n---------------------------------------------------")
    print("Address Insight - US - GetAddressInsight - SOAP SDK")
    print("---------------------------------------------------")

    business_name = "Service Objects"
    address1 = "136 W Canon Perdido St, Suite D"
    address2 = ""
    city = "Santa Barbara"
    state = "CA"
    zip_code = "93101"
    test_type = "census_loose"
    timeout_seconds = 10

    print("\r\n* Input *\r\n")
    print(f"Business Name  : {business_name}")
    print(f"Address1       : {address1}")
    print(f"Address2       : {address2}")
    print(f"City           : {city}")
    print(f"State          : {state}")
    print(f"Zip            : {zip_code}")
    print(f"Test Type      : {test_type}")
    print(f"License Key    : {license}")
    print(f"Is Live        : {is_live_key}")
    print(f"Timeout Seconds: {timeout_seconds}")

    try:
        service = GetAddressInsightSoap(license, is_live_key, timeout_ms=timeout_seconds*1000)
        response = service.get_address_insight(business_name, address1, address2, city, state, zip_code, test_type)

        print("\r\n* Address Insight *\r\n")
        if response and hasattr(response, "Response") and response.Response:
            if response and response.Response[0].Value.Result:
                fields = response.Response[0].Value.Result[0].Field
                if fields and len(fields) > 0:
                    field_dict = {field.Key: field.Value for field in fields}
                    print(f"Status                : {field_dict.get('Status', '')}")
                    print(f"StatusScore           : {field_dict.get('StatusScore', '')}")
                    print(f"AddressStatus         : {field_dict.get('AddressStatus', '')}")
                    print(f"DPV                   : {field_dict.get('DPV', '')}")
                    print(f"DPVDesc               : {field_dict.get('DPVDesc', '')}")
                    print(f"Address               : {field_dict.get('Address', '')}")
                    print(f"AddressExtra          : {field_dict.get('AddressExtra', '')}")
                    print(f"City                  : {field_dict.get('City', '')}")
                    print(f"State                 : {field_dict.get('State', '')}")
                    print(f"Zip                   : {field_dict.get('Zip', '')}")
                    print(f"BarcodeDigits         : {field_dict.get('BarcodeDigits', '')}")
                    print(f"CarrierRoute          : {field_dict.get('CarrierRoute', '')}")
                    print(f"CongressCode          : {field_dict.get('CongressCode', '')}")
                    print(f"CountyName            : {field_dict.get('CountyName', '')}")
                    print(f"FragmentHouse         : {field_dict.get('FragmentHouse', '')}")
                    print(f"FragmentPreDir        : {field_dict.get('FragmentPreDir', '')}")
                    print(f"FragmentStreet        : {field_dict.get('FragmentStreet', '')}")
                    print(f"FragmentSuffix        : {field_dict.get('FragmentSuffix', '')}")
                    print(f"FragmentPostDir       : {field_dict.get('FragmentPostDir', '')}")
                    print(f"FragmentUnit          : {field_dict.get('FragmentUnit', '')}")
                    print(f"FragmentUnitNumber    : {field_dict.get('FragmentUnitNumber', '')}")
                    print(f"FragmentPMBPrefix     : {field_dict.get('FragmentPMBPrefix', '')}")
                    print(f"FragmentPMBNumber     : {field_dict.get('FragmentPMBNumber', '')}")
                    print(f"Corrections           : {field_dict.get('Corrections', '')}")
                    print(f"CorrectionsDesc       : {field_dict.get('CorrectionsDesc', '')}")
                    print(f"AddressNotes          : {field_dict.get('AddressNotes', '')}")
                    print(f"AddressNotesCodes     : {field_dict.get('AddressNotesCodes', '')}")
                    print(f"GeocodeStatus         : {field_dict.get('GeocodeStatus', '')}")
                    print(f"LocationLatitude      : {field_dict.get('LocationLatitude', '')}")
                    print(f"LocationLongitude     : {field_dict.get('LocationLongitude', '')}")
                    print(f"CensusTract           : {field_dict.get('CensusTract', '')}")
                    print(f"CensusBlock           : {field_dict.get('CensusBlock', '')}")
                    print(f"PlaceName             : {field_dict.get('PlaceName', '')}")
                    print(f"ClassFP               : {field_dict.get('ClassFP', '')}")
                    print(f"SLDUST                : {field_dict.get('SLDUST', '')}")
                    print(f"SLDLST                : {field_dict.get('SLDLST', '')}")
                    print(f"CountyFIPS            : {field_dict.get('CountyFIPS', '')}")
                    print(f"StateFIPS             : {field_dict.get('StateFIPS', '')}")
                    print(f"GeocodeNotes          : {field_dict.get('GeocodeNotes', '')}")
                    print(f"GeocodeNotesCodes     : {field_dict.get('GeocodeNotesCodes', '')}")
                    print(f"ZipStatus             : {field_dict.get('ZipStatus', '')}")
                    print(f"ZipLatitude           : {field_dict.get('ZipLatitude', '')}")
                    print(f"ZipLongitude          : {field_dict.get('ZipLongitude', '')}")
                    print(f"CityType              : {field_dict.get('CityType', '')}")
                    print(f"CityAliasName         : {field_dict.get('CityAliasName', '')}")
                    print(f"AreaCode              : {field_dict.get('AreaCode', '')}")
                    print(f"TimeZone              : {field_dict.get('TimeZone', '')}")
                    print(f"DaylightSaving        : {field_dict.get('DaylightSaving', '')}")
                    print(f"MSA                   : {field_dict.get('MSA', '')}")
                    print(f"CBSA                  : {field_dict.get('CBSA', '')}")
                    print(f"CBSA_Div              : {field_dict.get('CBSA_Div', '')}")
                    print(f"PMSA                  : {field_dict.get('PMSA', '')}")
                    print(f"DMA                   : {field_dict.get('DMA', '')}")
                    print(f"ZipHouseholdValue     : {field_dict.get('ZipHouseholdValue', '')}")
                    print(f"ZipPersonsPerHousehold: {field_dict.get('ZipPersonsPerHousehold', '')}")
                    print(f"ZipHouseholdIncome    : {field_dict.get('ZipHouseholdIncome', '')}")
                    print(f"CountyHouseholdIncome : {field_dict.get('CountyHouseholdIncome', '')}")
                    print(f"StateHouseholdIncome  : {field_dict.get('StateHouseholdIncome', '')}")
                    print(f"ZipNotes              : {field_dict.get('ZipNotes', '')}")
                    print(f"ZipNotesCodes         : {field_dict.get('ZipNotesCodes', '')}")
                else:
                    print("No address insight data found.")
            else:
                print("No address insight data found.")

        if hasattr(response, 'Error') and response.Error:
            print("\r\n* Error *\r\n")
            error_fields = response.Error.Result[0].Field if (hasattr(response.Error, 'Result') and 
                                                             hasattr(response.Error.Result, 'Field')) else []
            type_value = next((f.Value for f in error_fields if f.Key == "Type"), "")
            type_code = next((f.Value for f in error_fields if f.Key == "TypeCode"), "")
            desc = next((f.Value for f in error_fields if f.Key == "Desc"), "")
            desc_code = next((f.Value for f in error_fields if f.Key == "DescCode"), "")
            print(f"Error Type        : {type_value}")
            print(f"Error Type Code   : {type_code}")
            print(f"Error Desc        : {desc}")
            print(f"Error Desc Code   : {desc_code}")

    except Exception as e:
        print("\r\n* Error *\r\n")
        print(f"Exception occurred: {str(e)}")

