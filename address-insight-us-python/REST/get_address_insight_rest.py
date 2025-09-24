from ain_response import AINResponse, Error
import requests

# Endpoint URLs for ServiceObjects AddressInsight (AIN) API
primary_url = "https://sws.serviceobjects.com/ain/api.svc/json/GetAddressInsight?"
backup_url = "https://swsbackup.serviceobjects.com/ain/api.svc/json/GetAddressInsight?"
trial_url = "https://trial.serviceobjects.com/ain/api.svc/json/GetAddressInsight?"

def get_address_insight(
    business_name: str,
    address1: str,
    address2: str,
    city: str,
    state: str,
    zip_code: str,
    test_type: str,
    license_key: str,
    is_live: bool = True
) -> AINResponse:
    """
    Call ServiceObjects AddressInsight (AIN) API's GetAddressInsight endpoint
    to retrieve address validation, geocoding, and demographic information for a given US address.

    Parameters:
        business_name: A company name for a business, can provide additional insight or append a SuiteLink value. Optional.
        address1: Address line 1 of the contact or business address (e.g., "123 Main Street").
        address2: Address line 2 of the contact or business address (e.g., "Apt 4B"). Optional.
        city: The city of the address (e.g., "New York"). Optional if zip is provided.
        state: The state of the address (e.g., "NY"). Optional if zip is provided.
        zip_code: The ZIP code of the address. Optional if city and state are provided.
        test_type: The test type, either empty or "census_loose" for best possible match based on census data. Optional.
        license_key: Your ServiceObjects license key.
        is_live: Use live or trial servers.

    Returns:
        AINResponse: Parsed JSON response with address insight results or error details.

    Raises:
        RuntimeError: If the API returns an error payload.
        requests.RequestException: On network/HTTP failures (trial mode).
    """
    params = {
        "BusinessName": business_name,
        "Address1": address1,
        "Address2": address2,
        "City": city,
        "State": state,
        "Zip": zip_code,
        "TestType": test_type,
        "LicenseKey": license_key,
    }
    # Select the base URL: production vs trial
    url = primary_url if is_live else trial_url

    try:
        # Attempt primary (or trial) endpoint
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()

        # If API returned an error in JSON payload, trigger fallback
        error = data.get('Error')
        if not (error is None or error.get('TypeCode') != "3"):
            if is_live:
                # Try backup URL
                response = requests.get(backup_url, params=params, timeout=10)
                response.raise_for_status()
                data = response.json()

                # If still error, propagate exception
                if 'Error' in data:
                    raise RuntimeError(f"AddressInsight service error: {data['Error']}")
            else:
                # Trial mode error is terminal
                raise RuntimeError(f"AddressInsight trial error: {data['Error']}")

        # Convert JSON response to AINResponse for structured access
        error = Error(**data.get("Error", {})) if data.get("Error") else None

        return AINResponse(
            Status=data.get("Status"),
            StatusScore=data.get("StatusScore"),
            AddressStatus=data.get("AddressStatus"),
            DPV=data.get("DPV"),
            DPVDesc=data.get("DPVDesc"),
            Address=data.get("Address"),
            AddressExtra=data.get("AddressExtra"),
            City=data.get("City"),
            State=data.get("State"),
            Zip=data.get("Zip"),
            BarcodeDigits=data.get("BarcodeDigits"),
            CarrierRoute=data.get("CarrierRoute"),
            CongressCode=data.get("CongressCode"),
            CountyCode=data.get("CountyCode"),
            CountyName=data.get("CountyName"),
            FragmentHouse=data.get("FragmentHouse"),
            FragmentPreDir=data.get("FragmentPreDir"),
            FragmentStreet=data.get("FragmentStreet"),
            FragmentSuffix=data.get("FragmentSuffix"),
            FragmentPostDir=data.get("FragmentPostDir"),
            FragmentUnit=data.get("FragmentUnit"),
            FragmentUnitNumber=data.get("FragmentUnitNumber"),
            Fragment=data.get("Fragment"),
            FragmentPMBPrefix=data.get("FragmentPMBPrefix"),
            FragmentPMBNumber=data.get("FragmentPMBNumber"),
            Corrections=data.get("Corrections"),
            CorrectionsDesc=data.get("CorrectionsDesc"),
            AddressNotes=data.get("AddressNotes"),
            AddressNotesCodes=data.get("AddressNotesCodes"),
            GeocodeStatus=data.get("GeocodeStatus"),
            LocationLatitude=data.get("LocationLatitude"),
            LocationLongitude=data.get("LocationLongitude"),
            CensusTract=data.get("CensusTract"),
            CensusBlock=data.get("CensusBlock"),
            PlaceName=data.get("PlaceName"),
            ClassFP=data.get("ClassFP"),
            SLDUST=data.get("SLDUST"),
            SLDLST=data.get("SLDLST"),
            CountyFIPS=data.get("CountyFIPS"),
            StateFIPS=data.get("StateFIPS"),
            GeocodeNotes=data.get("GeocodeNotes"),
            GeocodeNotesCodes=data.get("GeocodeNotesCodes"),
            ZipStatus=data.get("ZipStatus"),
            ZipLatitude=data.get("ZipLatitude"),
            ZipLongitude=data.get("ZipLongitude"),
            CityType=data.get("CityType"),
            CityAliasName=data.get("CityAliasName"),
            AreaCode=data.get("AreaCode"),
            TimeZone=data.get("TimeZone"),
            DaylightSaving=data.get("DaylightSaving"),
            MSA=data.get("MSA"),
            CBSA=data.get("CBSA"),
            CBSA_Div=data.get("CBSA_Div"),
            PMSA=data.get("PMSA"),
            DMA=data.get("DMA"),
            ZipHouseholdValue=data.get("ZipHouseholdValue"),
            ZipPersonsPerHousehold=data.get("ZipPersonsPerHousehold"),
            ZipHouseholdIncome=data.get("ZipHouseholdIncome"),
            CountyHouseholdIncome=data.get("CountyHouseholdIncome"),
            StateHouseholdIncome=data.get("StateHouseholdIncome"),
            ZipNotes=data.get("ZipNotes"),
            ZipNotesCodes=data.get("ZipNotesCodes"),
            Debug=data.get("Debug", []),
            Error=error
        )

    except requests.RequestException as req_exc:
        # Network or HTTP-level error occurred
        if is_live:
            try:
                # Fallback to backup URL
                response = requests.get(backup_url, params=params, timeout=10)
                response.raise_for_status()
                data = response.json()
                if "Error" in data:
                    raise RuntimeError(f"AddressInsight backup error: {data['Error']}") from req_exc

                error = Error(**data.get("Error", {})) if data.get("Error") else None

                return AINResponse(
                    Status=data.get("Status"),
                    StatusScore=data.get("StatusScore"),
                    AddressStatus=data.get("AddressStatus"),
                    DPV=data.get("DPV"),
                    DPVDesc=data.get("DPVDesc"),
                    Address=data.get("Address"),
                    AddressExtra=data.get("AddressExtra"),
                    City=data.get("City"),
                    State=data.get("State"),
                    Zip=data.get("Zip"),
                    BarcodeDigits=data.get("BarcodeDigits"),
                    CarrierRoute=data.get("CarrierRoute"),
                    CongressCode=data.get("CongressCode"),
                    CountyCode=data.get("CountyCode"),
                    CountyName=data.get("CountyName"),
                    FragmentHouse=data.get("FragmentHouse"),
                    FragmentPreDir=data.get("FragmentPreDir"),
                    FragmentStreet=data.get("FragmentStreet"),
                    FragmentSuffix=data.get("FragmentSuffix"),
                    FragmentPostDir=data.get("FragmentPostDir"),
                    FragmentUnit=data.get("FragmentUnit"),
                    FragmentUnitNumber=data.get("FragmentUnitNumber"),
                    Fragment=data.get("Fragment"),
                    FragmentPMBPrefix=data.get("FragmentPMBPrefix"),
                    FragmentPMBNumber=data.get("FragmentPMBNumber"),
                    Corrections=data.get("Corrections"),
                    CorrectionsDesc=data.get("CorrectionsDesc"),
                    AddressNotes=data.get("AddressNotes"),
                    AddressNotesCodes=data.get("AddressNotesCodes"),
                    GeocodeStatus=data.get("GeocodeStatus"),
                    LocationLatitude=data.get("LocationLatitude"),
                    LocationLongitude=data.get("LocationLongitude"),
                    CensusTract=data.get("CensusTract"),
                    CensusBlock=data.get("CensusBlock"),
                    PlaceName=data.get("PlaceName"),
                    ClassFP=data.get("ClassFP"),
                    SLDUST=data.get("SLDUST"),
                    SLDLST=data.get("SLDLST"),
                    CountyFIPS=data.get("CountyFIPS"),
                    StateFIPS=data.get("StateFIPS"),
                    GeocodeNotes=data.get("GeocodeNotes"),
                    GeocodeNotesCodes=data.get("GeocodeNotesCodes"),
                    ZipStatus=data.get("ZipStatus"),
                    ZipLatitude=data.get("ZipLatitude"),
                    ZipLongitude=data.get("ZipLongitude"),
                    CityType=data.get("CityType"),
                    CityAliasName=data.get("CityAliasName"),
                    AreaCode=data.get("AreaCode"),
                    TimeZone=data.get("TimeZone"),
                    DaylightSaving=data.get("DaylightSaving"),
                    MSA=data.get("MSA"),
                    CBSA=data.get("CBSA"),
                    CBSA_Div=data.get("CBSA_Div"),
                    PMSA=data.get("PMSA"),
                    DMA=data.get("DMA"),
                    ZipHouseholdValue=data.get("ZipHouseholdValue"),
                    ZipPersonsPerHousehold=data.get("ZipPersonsPerHousehold"),
                    ZipHouseholdIncome=data.get("ZipHouseholdIncome"),
                    CountyHouseholdIncome=data.get("CountyHouseholdIncome"),
                    StateHouseholdIncome=data.get("StateHouseholdIncome"),
                    ZipNotes=data.get("ZipNotes"),
                    ZipNotesCodes=data.get("ZipNotesCodes"),
                    Debug=data.get("Debug", []),
                    Error=error
                )
            except Exception as backup_exc:
                raise RuntimeError("AddressInsight service unreachable on both endpoints") from backup_exc
        else:
            raise RuntimeError(f"AddressInsight trial error: {str(req_exc)}") from req_exc