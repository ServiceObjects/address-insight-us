import { GetAddressInsightSoap } from '../address-insight-us-nodejs/SOAP/get_address_insight_soap.js';

async function GetAddressInsightSoapGo(licenseKey, isLive) {
    console.log("\n---------------------------------------------------");
    console.log("Address Insight - US - GetAddressInsight - SOAP SDK");
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
    console.log(`Business Name   : ${businessName}`);
    console.log(`Address1        : ${address1}`);
    console.log(`Address2        : ${address2}`);
    console.log(`City            : ${city}`);
    console.log(`State           : ${state}`);
    console.log(`Zip             : ${zip}`);
    console.log(`Test Type       : ${testType}`);
    console.log(`License Key     : ${licenseKey}`);
    console.log(`Is Live         : ${isLive}`);
    console.log(`Timeout Seconds : ${timeoutSeconds}`);

    try {
        const ain = new GetAddressInsightSoap(
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
        const response = await ain.invokeAsync();

      if (response && !response.Error) {
           console.log("\n* Address Insight *\n");
            const fields = response.Response[0].Value.Result[0].Field || [];
            const getFieldValue = (key) => {
                const field = fields.find(f => f.Key === key);
                return field ? field.Value : "";
            };
            console.log(`Status                : ${getFieldValue("Status")}`);
            console.log(`StatusScore           : ${getFieldValue("StatusScore")}`);
            console.log(`AddressStatus         : ${getFieldValue("AddressStatus")}`);
            console.log(`DPV                   : ${getFieldValue("DPV")}`);
            console.log(`DPVDesc               : ${getFieldValue("DPVDesc")}`);
            console.log(`Address               : ${getFieldValue("Address")}`);
            console.log(`AddressExtra          : ${getFieldValue("AddressExtra")}`);
            console.log(`City                  : ${getFieldValue("City")}`);
            console.log(`State                 : ${getFieldValue("State")}`);
            console.log(`Zip                   : ${getFieldValue("Zip")}`);
            console.log(`BarcodeDigits         : ${getFieldValue("BarcodeDigits")}`);
            console.log(`CarrierRoute          : ${getFieldValue("CarrierRoute")}`);
            console.log(`CongressCode          : ${getFieldValue("CongressCode")}`);
            console.log(`CountyName            : ${getFieldValue("CountyName")}`);
            console.log(`FragmentHouse         : ${getFieldValue("FragmentHouse")}`);
            console.log(`FragmentPreDir        : ${getFieldValue("FragmentPreDir")}`);
            console.log(`FragmentStreet        : ${getFieldValue("FragmentStreet")}`);
            console.log(`FragmentSuffix        : ${getFieldValue("FragmentSuffix")}`);
            console.log(`FragmentPostDir       : ${getFieldValue("FragmentPostDir")}`);
            console.log(`FragmentUnit          : ${getFieldValue("FragmentUnit")}`);
            console.log(`FragmentUnitNumber    : ${getFieldValue("FragmentUnitNumber")}`);
            console.log(`FragmentPMBPrefix     : ${getFieldValue("FragmentPMBPrefix")}`);
            console.log(`FragmentPMBNumber     : ${getFieldValue("FragmentPMBNumber")}`);
            console.log(`Corrections           : ${getFieldValue("Corrections")}`);
            console.log(`CorrectionsDesc       : ${getFieldValue("CorrectionsDesc")}`);
            console.log(`AddressNotes          : ${getFieldValue("AddressNotes")}`);
            console.log(`AddressNotesCodes     : ${getFieldValue("AddressNotesCodes")}`);
            console.log(`GeocodeStatus         : ${getFieldValue("GeocodeStatus")}`);
            console.log(`LocationLatitude      : ${getFieldValue("LocationLatitude")}`);
            console.log(`LocationLongitude     : ${getFieldValue("LocationLongitude")}`);
            console.log(`CensusTract           : ${getFieldValue("CensusTract")}`);
            console.log(`CensusBlock           : ${getFieldValue("CensusBlock")}`);
            console.log(`PlaceName             : ${getFieldValue("PlaceName")}`);
            console.log(`ClassFP               : ${getFieldValue("ClassFP")}`);
            console.log(`SLDUST                : ${getFieldValue("SLDUST")}`);
            console.log(`SLDLST                : ${getFieldValue("SLDLST")}`);
            console.log(`CountyFIPS            : ${getFieldValue("CountyFIPS")}`);
            console.log(`StateFIPS             : ${getFieldValue("StateFIPS")}`);
            console.log(`GeocodeNotes          : ${getFieldValue("GeocodeNotes")}`);
            console.log(`GeocodeNotesCodes     : ${getFieldValue("GeocodeNotesCodes")}`);
            console.log(`ZipStatus             : ${getFieldValue("ZipStatus")}`);
            console.log(`ZipLatitude           : ${getFieldValue("ZipLatitude")}`);
            console.log(`ZipLongitude          : ${getFieldValue("ZipLongitude")}`);
            console.log(`CityType              : ${getFieldValue("CityType")}`);
            console.log(`CityAliasName         : ${getFieldValue("CityAliasName")}`);
            console.log(`AreaCode              : ${getFieldValue("AreaCode")}`);
            console.log(`TimeZone              : ${getFieldValue("TimeZone")}`);
            console.log(`DaylightSaving        : ${getFieldValue("DaylightSaving")}`);
            console.log(`MSA                   : ${getFieldValue("MSA")}`);
            console.log(`CBSA                  : ${getFieldValue("CBSA")}`);
            console.log(`CBSA_Div              : ${getFieldValue("CBSA_Div")}`);
            console.log(`PMSA                  : ${getFieldValue("PMSA")}`);
            console.log(`DMA                   : ${getFieldValue("DMA")}`);
            console.log(`ZipHouseholdValue     : ${getFieldValue("ZipHouseholdValue")}`);
            console.log(`ZipPersonsPerHousehold: ${getFieldValue("ZipPersonsPerHousehold")}`);
            console.log(`ZipHouseholdIncome    : ${getFieldValue("ZipHouseholdIncome")}`);
            console.log(`CountyHouseholdIncome : ${getFieldValue("CountyHouseholdIncome")}`);
            console.log(`StateHouseholdIncome  : ${getFieldValue("StateHouseholdIncome")}`);
            console.log(`ZipNotes              : ${getFieldValue("ZipNotes")}`);
            console.log(`ZipNotesCodes         : ${getFieldValue("ZipNotesCodes")}`);
        } else {
            console.log("\n* Error *\n");
            if (response?.Error && response.Error.Result?.[0]?.Field) {
                const errorFields = response.Error.Result[0].Field;
                console.log(`TypeDesc : ${errorFields.find(f => f.Key === "TypeDesc")?.Value || ""}`);
                console.log(`TypeCode : ${errorFields.find(f => f.Key === "TypeCode")?.Value || ""}`);
                console.log(`Desc     : ${errorFields.find(f => f.Key === "Desc")?.Value || ""}`);
                console.log(`DescCode : ${errorFields.find(f => f.Key === "DescCode")?.Value || ""}`);
            } else {
                console.log("Unknown error occurred.");
            }
        }
    } catch (e) {
        console.log("\n* Error *\n");
        console.log(`Error Message: ${e.message}`);
    }
}

export { GetAddressInsightSoapGo };