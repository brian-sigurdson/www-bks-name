//
// The following function makes an api call to get the value for the page counter.
//
function updateVisitorCount() {
    fetch('https://38d9ezou2b.execute-api.us-east-2.amazonaws.com/bks-name-visitor-count')
        .then(response => response.json()).then(data => {
            console.log(data);
            document.getElementById('visitorCount').innerText = "Visitor: " + data.toString();
    });
}