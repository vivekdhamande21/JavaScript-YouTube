// //for of


// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// } 

// const greeting = "Hello World"
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }

// //maps

const map  = new Map()
map.set('IN',"India")
map.set('FR',"France")

console.log(map);

for (const key of map) {
    console.log(key);
}