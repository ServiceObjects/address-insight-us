from suds.client import Client
from suds import WebFault
from suds.sudsobject import Object


class GetAddressInsightSoap:
    def __init__(self, license_key: str, is_live: bool = True, timeout_ms: int = 15000):
        """
        license_key: Service Objects AIN license key.
        is_live: Whether to use live or trial endpoints
        timeout_ms: SOAP call timeout in milliseconds
        """
        self.is_live = is_live
        self.timeout = timeout_ms / 1000.0
        self.license_key = license_key
       
        # WSDL URLs
        self._primary_wsdl = (
            "https://sws.serviceobjects.com/AIN/SOAP.svc?wsdl"
            if is_live
            else "https://trial.serviceobjects.com/AIN/SOAP.svc?wsdl"
        )
        self._backup_wsdl = (
            "https://swsbackup.serviceobjects.com/AIN/SOAP.svc?wsdl"
            if is_live
            else "https://trial.serviceobjects.com/AIN/SOAP.svc?wsdl"
        )

    def get_address_insight(
        self,
        business_name: str,
        address1: str,
        address2: str,
        city: str,
        state: str,
        zip_code: str,
        test_type: str,
    ) -> Object:
        """
        Calls the GetAddressInsight SOAP API to retrieve the information.

        Parameters:
            business_name: A company name for a business, can provide additional insight or append a SuiteLink value. Optional.
            address1: Address line 1 of the contact or business address (e.g., "123 Main Street").
            address2: Address line 2 of the contact or business address (e.g., "Apt 4B"). Optional.
            city: The city of the address (e.g., "New York"). Optional if zip is provided.
            state: The state of the address (e.g., "NY"). Optional if zip is provided.
            zip_code: The ZIP code of the address. Optional if city and state are provided.
            test_type: The test type, either empty or "census_loose" for best possible match based on census data. Optional.
            license_key: Your ServiceObjects license key.
            is_live: Determines whether to use the live or trial servers.
            timeout_ms: Timeout, in milliseconds, for the call to the service.

        Returns:
            suds.sudsobject.Object: SOAP response containing address insight details or error.
        """

        # Common kwargs for both calls
        call_kwargs = dict(
            BusinessName=business_name,
            Address1=address1,
            Address2=address2,
            City=city,
            State=state,
            Zip=zip_code,
            TestType=test_type,
            LicenseKey=self.license_key,
        )

        # Attempt primary
        try:
            client = Client(self._primary_wsdl)
            # Override endpoint URL if needed:
            # client.set_options(location=self._primary_wsdl.replace('?wsdl','/soap'))
            response = client.service.GetAddressInsight(**call_kwargs)

            # If response invalid or Error.TypeCode == "3", trigger fallback
            if response is None or (
                hasattr(response, "Error")
                and response.Error
                and hasattr(response.Error, "TypeCode")
                and response.Error.TypeCode == "3"
            ):
                raise ValueError("Primary returned no result or Error.TypeCode=3")

            return response

        except (WebFault, ValueError, Exception) as primary_ex:
            # Attempt backup
            try:
                client = Client(self._backup_wsdl)
                response = client.service.GetAddressInsight(**call_kwargs)
                if response is None:
                    raise ValueError("Backup returned no result")
                return response
            except (WebFault, Exception) as backup_ex:
                msg = (
                    "Both primary and backup endpoints failed.\n"
                    f"Primary error: {str(primary_ex)}\n"
                    f"Backup error: {str(backup_ex)}"
                )
                raise RuntimeError(msg)