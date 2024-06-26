// function calculateCartPrice(...num1){
//     return num1
// }
// // console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200,300,400));


const user = {
    username: "Vivek",
    price:199
}

function handleObject(anyobject){
    
    console.log(`username is ${anyobject.username} and pricd is ${anyobject.price}`);
}

handleObject({
    username: "Vivek",
    price:299
})


const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,300,400]));