// Stack (Primitive), Heap(Non-Premtive)

let myName = "Vivek"

let anotherName = myName;
anotherName = "zorawar"

console.log(myName);  
 console.log(anotherName); 

let userOne = {
    email: "user@google",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email
console.log(userOne.email);
console.log(userTwo.email);