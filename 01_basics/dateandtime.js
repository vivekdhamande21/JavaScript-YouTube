let myDate = new Date()
// console.log(myDate); 

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,3);

// let myCreateDate = new Date("01-14-2023")

// console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log((Math.floor(Date.now()/1000)));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
}) 