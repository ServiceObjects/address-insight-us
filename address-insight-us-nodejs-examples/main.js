import {GetAddressInsightClientGo} from './get_address_insight_rest_sdk_example.js';
import {GetAddressInsightSoapGo} from './get_address_insight_soap_sdk_example.js'

export async function main()
{
    //Your license key from Service Objects.
    //Trial license keys will only work on the
    //trail environments and production license
    //keys will only work on production environments.
    const licenseKey = "LICENSE KEY";
    const isLive = true;

    // Address Insight – US - GetAddressInsight - REST SDK
    await GetAddressInsightClientGo(licenseKey, isLive);

    // Address Insight – US - GetAddressInsight - SOAP SDK
    await GetAddressInsightSoapGo(licenseKey, isLive);

}
main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});