// Improved error handling
if (!response.ok) {
    throw new Error('Network response was not ok: ' + response.statusText);
}
const data = await response.json();
