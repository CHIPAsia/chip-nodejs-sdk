var PublicRestApi = require('your_package_name').default;

PublicRestApi.ApiClient.instance.basePath = "ENDPOINT";
PublicRestApi.ApiClient.instance.token = "TOKEN"

const apiInstance = new PublicRestApi.PaymentApi();
const brandId = "BRAND_ID";
const callback = (error, data, response) => {
  if (error) {
    console.error(error);
    console.log(error.response.request._data);
  } else {
    console.log('API called successfully. Returned data:');
    console.log(data);
    console.log(response.request.method);
  }
}

const createPurchase = () => {
	const client = new PublicRestApi.ClientDetails("test@test.com");
    const product = new PublicRestApi.Product("Test", 100);
    const details = new PublicRestApi.PurchaseDetails([product]);
    const purchase = new PublicRestApi.Purchase();
    purchase.brand_id = brandId;
    purchase.client = client;
    purchase.purchase = details;
    apiInstance.purchasesCreate(purchase, callback)
}

const getPurchase = () => {
	apiInstance.purchasesRead("purchase_id", callback);
}

const getPaymentMethods = () => {
	apiInstance.paymentMethods(brandId, "EUR", {}, callback);
}

const cancelPurchase = () => {
    apiInstance.purchasesCancel("purchase_id", callback)
}

const releasePurchase = () => {
    apiInstance.purchasesRelease("purchase_id", callback)
}

const capturePurchase = () => {
    apiInstance.purchasesCapture("purchase_id", 100, callback);
}

const refundPurchase = () => {
    apiInstance.purchasesRefund("purchase_id", 100, callback);
}

const chargePurchase = () => {
    apiInstance.purchasesCharge("purchase_id", "recurring_token", callback);
}

const deleteRecurringToken = () => {
    apiInstance.purchasesDeleteRecurringToken("purchase_id", callback);
}

const verify = () => {
	const content = "Hello, World!";
    const signature = "L+cg9pd9YyoMBYPUoS1/8FFV6pVGscHWGtP5PqqTDejGYlBYndGxoeM7TgZHBa1YLjwj7eyWAwSZYg3AwEFOucg4ya53w8D188rl3u5iaFGtM2FTLcMb1KwesfRoB6tdyKBphERrXp0X6vqg1yzO7zAlnrcKMC6O59IPrUescrJdGiB071f55UJk2zPtNZ5jkjZ3MqiOv8qcBMVaPWVMZBeXC+Jz5RnZmmH0kktqazpTUhfb2Dtv2kbrdRq/ZaZMVerZWwfJyjle2Si2o2s68x9ImZxHkgRgDmuUcAJDqG3Uj9JUFr9JwwSbhQFo9xHAr7/GpEVrcdifqwdZVG6QkQ==";
    const publicKey = '-----BEGIN CERTIFICATE-----\n' +
            'MIIDazCCAlOgAwIBAgIUbZOpp8FbIaCbUvLPGF8tj7NIxzEwDQYJKoZIhvcNAQEL\n' +
            'BQAwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgMClNvbWUtU3RhdGUxITAfBgNVBAoM\n' +
            'GEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDAeFw0yMDEwMDUwNjM3NTBaFw0zMDEw\n' +
            'MDMwNjM3NTBaMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEw\n' +
            'HwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwggEiMA0GCSqGSIb3DQEB\n' +
            'AQUAA4IBDwAwggEKAoIBAQDYsm7qcdWAR/v6YJbectxKGq2889XhSz4tCRBgAZ6h\n' +
            'TokvmIwz7I8Fi2lG4LxSHva6RcLxO0+DEi5eLzDPx01MNOhqmF0BA9jliaUaBrYy\n' +
            'oYZuaDwbrpUG8jfgFI7AE8kYEAhAPf5jLysNoS7VOBd7mVdpIUecw7K0fbU+ho+L\n' +
            'rvwVsnh5lpjzTlCct042baP9RbB3NTQuZZVrEa/0FKEWJ1XwY69k1JnbyHZIlk3S\n' +
            'BPq4hhzpLCVDoY9bsOoJLQeKiQaFEo2wJIf4DxrCcNkIpfVtGno4+GOYl/D+cKG5\n' +
            'CLR41WDm30I7wq3zQ86mBOzg4iWHZr+PRfm9DGk1dc6LAgMBAAGjUzBRMB0GA1Ud\n' +
            'DgQWBBQRKOTGoF8saoaMkfs2hDjwWG82bTAfBgNVHSMEGDAWgBQRKOTGoF8saoaM\n' +
            'kfs2hDjwWG82bTAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBU\n' +
            'U9J4CRwLK/87G5LRXsJgGlr82RuJRibO4+bfHQ1kj/27ysJ92LGb80QEAixS8eBf\n' +
            '8FJz/fUV/dTRJSZNFM8fzUTTiEc3kiju6eoLtfzrIxSO9TyKgEYefPfQkguRbYr9\n' +
            'BXHDz535xvyyNGTnngxUxd+VWI6NQgSjJpwTrVzqkD5uMFIkcsaGmKvC9EHbpZyo\n' +
            'WfFymHCO92HwAz5oh52m5+tLqvq9NZ1+QISk5sfjhVyZpC8T4bGObxf7IIh8rcE1\n' +
            '7LavQ4sT/0OnbbBFS3V1vwuYBoF7ELdzssMlx351LbIyimJO1Z1p1sxJcZKnHLOH\n' +
            'XUIfnLFzPxx/6UdKdVIK\n' +
            '-----END CERTIFICATE-----';
    const result = apiInstance.verify(content, Buffer.from(signature, 'base64'), publicKey);
    console.log(result)
}