
//Option 2 - with PROMISE
// to make Promise in function we use "async"
// () => {}
function findLocator (locator) {

    return new Promise((resolve, reject) => {
        if (locator === "valid-locator") {
            resolve("Element found");
        } else {
            reject("Element not found");
        }
    });
}



// Whenever we are calling a function which is returning Promise we need to handle it.
// When the function is returning Promise - that function is called ASYNCHRONIC FUNCTION
// The below is doing EXACTLY same thing as the above - in here we did not declare the promise EXPLICITLY
    async function clickElement (locator) {
        findLocator(locator)
            .then((element) => console.log(`Clicked ${element}`))
            .catch((error) => console.log(error));
    }
    clickElement ("valid-locator");
    console.log("Something else");


    // .catch() -----> if for reject / failure -> "error" can be any name and it is variable which is passed from reject in
    // 
    
    
    
    console.log("-----------------------------------");

    async function wclicElement(locator) {
        try {
            const result = await findLocator(locator);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    wclicElement("invalid-locator");


    /*
    Open browser
    NavigaTE to the Amazon
    Locate the element "Explare premium by Price"
    await -> by default waits for 30 secs and
    await in Playwright for Automation -> dy default waits for 30 sec

    */

    setTimeout(() => console.log("Wait complete"), 1000); // we have put this wait time just to explain now it would 