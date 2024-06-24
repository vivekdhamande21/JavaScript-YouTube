const mySym = Symbol("key1");
const jsUser = {
    name: "Vivek",
    "fullName":"Vivek Dhamande",
    age: 21,
    location: "Indore"  ,
    isLoggedIn: false,
    [mySym]: "mykey1",
    lastLogginDays: ["Monday","Saturday"] ,
    email:"dhamande31@gmail.com"
}

// console.log(jsUser.fullName);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(jsUser["fullName"]);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
