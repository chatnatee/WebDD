//Promisifying
function displayMeassge(){

    let promiseObj = new Promise((resolve, reject) => {
        
        //Production code E.X. Takes some time... 10sec...
        
        //consumer called
        resolve('Sending food'); //fulfilled promise state

        //rejected..
        reject('err');
    })

    promiseObj.then(
        //success call
        value => {
            console.log('success response: ', value)
            displayMeassge2(value);
        }
        ,
        //error
        error => console.log(error)
    )
}

displayMeassge();

function displayMeassge2(value){

    console.log('Arrange the party : ', value)
}