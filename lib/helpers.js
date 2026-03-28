async function fixedRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error during fetching: ${error.message}`);
        throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
}

export default fixedRequest;