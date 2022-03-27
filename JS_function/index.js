const a = 0;

//function definition/body
function showMessage(param1){ //parameters
    let sum = 10 + param1;
    console.log('Message from normal funtion :-> ' + param1);
    return function f1(){
        console.log('function return from showMessage();')
    };
}

returnedsum = showMessage(10); //arguments
console.log(returnedsum);

//E6+ arrow functions, higher order functions(map, filter, reduce),let const :

// let
// const
// var

showMessageWithArrow = arg1 => {
    let sum = 10;
    console.log('Message from arrow funtion : ' + arg1);
    return 'sum';
}

const result = showMessageWithArrow('Hello');
console.log(result);

