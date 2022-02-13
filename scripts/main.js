// The following function makes an api call to get the value for the page counter.
function updateVisitorCount() {
    // this will call an api to get the visitor count value, but just output random for now.
    let visitorCountVal = Math.random();
    visitorCountVal = (visitorCountVal * 500) + 1; // between 1 and 500
    visitorCountVal = Math.floor(visitorCountVal);

    let visitorCountElem = document.getElementById('visitorCount');
    visitorCountElem.innerText = `Visitor: ${visitorCountVal}`;
    console.log(visitorCountElem.innerText);
}