// var c = 300
// let a = 200
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "Vivek"
//         function two(){
//             const website = "youtube"
//             console.log(username);
//         }
//         //console.log(website); 

//         two()
// }
// one()

if(true){
    const username = "Vivek"
    if(username === "Vivek"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//****************Intresting*************************

console.log(addOne(5));
function addOne(num){
    return num + 1; 
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
