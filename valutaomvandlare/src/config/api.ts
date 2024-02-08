export const heading: string = "currency converter";
const API_DOMAIN: string = "https://openexchangerates.org/api/latest.json?app_id";
const API_KEY: string = "d6e7594e021a47f8a61ed137b6ca1adf";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;