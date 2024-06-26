// function sayMyName(){
//     console.log("V");
//     console.log("I");
//     console.log("V");
//     console.log("E");
//     console.log("K");
// }

//sayMyName()

//Creating two number addition program

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result;    
    return number1 + number2
}

const result = addTwoNumbers(3,5)



//Login User 


function userLoginMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage("Vivek"));

console.log(userLoginMessage(""));







