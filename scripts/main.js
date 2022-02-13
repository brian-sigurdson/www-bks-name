/*
    The following function makes an api call to get the value for the page counter.

    * I think that I can put a table in the footer of index.html, and split the table into two columns.
    * Each column will take up 50% of the page.
    * The first column will be left justified, the second right justified.
    * I think that the second column will need a zero margin paragraph, so that I can update the page count value that
    is returned from the api call.  I think the content of a paragraph is called the inner text.
 */
function updateVisitorCount() {
    // this will call an api to get the visitor count value, but just output random for now.
    let visitorCountVal = Math.random();
    visitorCountVal = (visitorCountVal * 500) + 1; // between 1 and 500
    visitorCountVal = Math.floor(visitorCountVal);

    let visitorCountElem = document.getElementById('visitorCount');
    visitorCountElem.innerText = `Visitor: ${visitorCountVal}`;
    console.log(visitorCountElem.innerText);
}

