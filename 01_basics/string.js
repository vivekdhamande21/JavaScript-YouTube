const name = "Vivek"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('Vivek')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(1,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "  Vivek  " 
console.log(newStringOne.trim());

const url = "https://Vivek.com/Vivek%20Dhamande"

console.log (url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName.split('-'));