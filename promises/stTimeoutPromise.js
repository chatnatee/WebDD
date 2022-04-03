let myPromiseObj = new Promise(function(myResolve, myReject) {
    // Production code
    setTimeout(() => {

        // calls to the consumer code 
        myResolve('I promised to return');
    
    }, 3000)
})

// Must wait until the promise is returned - consuming code
myPromiseObj.then(
    function(value) {
        //what to do once the promise is fulfilled - success goes here
        timeOutDisplay(value);
    },
    function(err){
        console.log(err);
    }
)
// NOTE: Regular funciton
// setTimeout(() => {
    //timeOutDisplay();
// }, 3000)

function timeOutDisplay(someValue) {
    document.getElementById('setTimeoutValue').innerHTML = someValue
}

// timeOutDisplay();