function callAfterThreeSeconds(){
    const time = 3;
    console.log('Call after : ', time + 'seconds');
    console.log(`Called after : ${time} seconds`);
}

callAfterThreeSeconds();

// setTimeout( callback function , delay ) // takes in two arguments

console.log('Statement 1')

setTimeout(callAfterThreeSeconds = () => {
    const time = 3;
    console.log(`Called after : ${time} seconds`);
}, 3000);

console.log('Statement 2')

function f2() {
    console.log('f2');
}

f2();
//const arrayOfNumber = [];