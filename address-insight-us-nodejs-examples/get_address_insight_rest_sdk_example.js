import { GetAddressInsightClient } from '../address-insight-us-nodejs/REST/get_address_insight_rest.js';

async function GetAddressInsightClientGo(licenseKey, isLive) {
    console.log("\n---------------------------------------------------");
    console.log("Address Insight - US - GetAddressInsight - REST SDK");
    console.log("---------------------------------------------------");

    const businessName = "";
    const address1 = "26 S Chestnut";
    const address2 = "";
    const city = "Ventura";
    const state = "CA";
    const zip = "93033";
    const testType = "";
    const timeoutSeconds = 15;

    console.log("\n* Input *\n");
    console.log(`Business Name  : ${businessName}`);
    console.log(`Address1       : ${address1}`);
    console.log(`Address2       : ${address2}`);
    console.log(`City           : ${city}`);
    console.log(`State          : ${state}`);
    console.log(`Zip            : ${zip}`);
    console.log(`Test Type      : ${testType}`);
    console.log(`License Key    : ${licenseKey}`);
    console.log(`Is Live        : ${isLive}`);
    console.log(`Timeout Seconds: ${timeoutSeconds}`);

    try {
        const response = await GetAddressInsightClient.invoke(
            businessName,
            address1,
            address2,
            city,
            state,
            zip,
            testType,
            licenseKey,
            isLive,
            timeoutSeconds
        );

        if (response.Error) {
            console.log("\n* Error *\n");
            console.log(`Error Type       : ${response.Error.Type}`);
            console.log(`Error Type Code  : ${response.Error.TypeCode}`);
            console.log(`Error Desc       : ${response.Error.Desc}`);
            console.log(`Error Desc Code  : ${response.Error.DescCode}`);
            return;
        }

        console.log("\n* Address Insight *\n");
        if (response) {
            console.log(`Status                 : ${response.Status}`);
            console.log(`Status Score           : ${response.StatusScore}`);
            console.log(`Address Status         : ${response.AddressStatus}`);
            console.log(`DPV                    : ${response.DPV}`);
            console.log(`DPV Description        : ${response.DPVDesc}`);
            console.log(`Address                : ${response.Address}`);
            console.log(`Address Extra          : ${response.AddressExtra}`);
            console.log(`City                   : ${response.City}`);
            console.log(`State                  : ${response.State}`);
            console.log(`Zip                    : ${response.Zip}`);
            console.log(`Barcode Digits         : ${response.BarcodeDigits}`);
            console.log(`Carrier Route          : ${response.CarrierRoute}`);
            console.log(`Congress Code          : ${response.CongressCode}`);
            console.log(`County Name            : ${response.CountyName}`);
            console.log(`Fragment House         : ${response.FragmentHouse}`);
            console.log(`Fragment PreDir        : ${response.FragmentPreDir}`);
            console.log(`Fragment Street        : ${response.FragmentStreet}`);
            console.log(`Fragment Suffix        : ${response.FragmentSuffix}`);
            console.log(`Fragment PostDir       : ${response.FragmentPostDir}`);
            console.log(`Fragment Unit          : ${response.FragmentUnit}`);
            console.log(`Fragment Unit Num      : ${response.FragmentUnitNumber}`);
            console.log(`Fragment PMB Prefix    : ${response.FragmentPMBPrefix}`);
            console.log(`Fragment PMB Number    : ${response.FragmentPMBNumber}`);
            console.log(`Corrections            : ${response.Corrections}`);
            console.log(`Corrections Desc       : ${response.CorrectionsDesc}`);
            console.log(`Address Notes          : ${response.AddressNotes}`);
            console.log(`Address Notes Codes    : ${response.AddressNotesCodes}`);
            console.log(`Geocode Status         : ${response.GeocodeStatus}`);
            console.log(`Latitude               : ${response.LocationLatitude}`);
            console.log(`Longitude              : ${response.LocationLongitude}`);
            console.log(`Census Tract           : ${response.CensusTract}`);
            console.log(`Census Block           : ${response.CensusBlock}`);
            console.log(`Place Name             : ${response.PlaceName}`);
            console.log(`Class FP               : ${response.ClassFP}`);
            console.log(`SLDUST                 : ${response.SLDUST}`);
            console.log(`SLDLST                 : ${response.SLDLST}`);
            console.log(`County FIPS            : ${response.CountyFIPS}`);
            console.log(`State FIPS             : ${response.StateFIPS}`);
            console.log(`Geocode Notes          : ${response.GeocodeNotes}`);
            console.log(`Geocode Notes Codes    : ${response.GeocodeNotesCodes}`);
            console.log(`Zip Status             : ${response.ZipStatus}`);
            console.log(`Zip Latitude           : ${response.ZipLatitude}`);
            console.log(`Zip Longitude          : ${response.ZipLongitude}`);
            console.log(`City Type              : ${response.CityType}`);
            console.log(`City Alias Name        : ${response.CityAliasName}`);
            console.log(`Area Code              : ${response.AreaCode}`);
            console.log(`Time Zone              : ${response.TimeZone}`);
            console.log(`Daylight Saving        : ${response.DaylightSaving}`);
            console.log(`MSA                    : ${response.MSA}`);
            console.log(`CBSA                   : ${response.CBSA}`);
            console.log(`CBSA Div               : ${response.CBSA_Div}`);
            console.log(`PMSA                   : ${response.PMSA}`);
            console.log(`DMA                    : ${response.DMA}`);
            console.log(`Zip Household Value    : ${response.ZipHouseholdValue}`);
            console.log(`Persons Per Household  : ${response.ZipPersonsPerHousehold}`);
            console.log(`Zip Household Income   : ${response.ZipHouseholdIncome}`);
            console.log(`County Household Income: ${response.CountyHouseholdIncome}`);
            console.log(`State Household Income : ${response.StateHouseholdIncome}`);
            console.log(`Zip Notes              : ${response.ZipNotes}`);
            console.log(`Zip Notes Codes        : ${response.ZipNotesCodes}`);
        } else {
            console.log("No address insight data found.");
        }

    } catch (e) {
        console.log("\n* Error *\n");
        console.log(`Error Message: ${e.message}`);
    }
}

export { GetAddressInsightClientGo };