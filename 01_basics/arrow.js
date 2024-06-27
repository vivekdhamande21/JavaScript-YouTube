const user = {
    username: "Vivek",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Vivek"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Vivek"
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) =>  num1 + num2
    
// const addTwo = (num1,num2) => ( num1 + num2)

const addTwo = (num1,num2) =>  ({username: "Vivek"})


console.log(addTwo(3,4));   


const myArray =[233,4,4,4,45]