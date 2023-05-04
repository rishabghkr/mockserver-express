export const logInformation = req => {
    // Log the request information
    console.log("---------------")
    console.log("---------------")
    console.log("---------------")
    console.log('Request URL:', req.url);
    console.log('Request Method:', req.method);
    console.log("---------------")
    console.log('Request Headers:', JSON.stringify(req.headers, null, 2));
    console.log("---------------")
    let requestBody = '';
    req.on('data', chunk => {
        requestBody += chunk.toString();
    });
    req.on('end', () => {
        console.log('Request Body:', requestBody);
    });
};
