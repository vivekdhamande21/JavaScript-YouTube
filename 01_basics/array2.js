const marvel = ["Thor","Ironman","Spiderman"]
const dc = ["Superman","Flash","Batman"];

// marvel.push(dc);
// console.log(marvel);

// marvel.concat(dc);
// console.log(marvel);

// const marvel_dc = marvel.concat(dc);
// console.log((marvel_dc));


// const all_marvel_dc = [...marvel,...dc];
// console.log(all_marvel_dc);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArr.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));
console.log();

console.log(Array.from({name: "Vivek"}));  //Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1,score2,score3));
