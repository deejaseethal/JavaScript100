//Spread Operator Example

// array
const fruits = ['apple','orange'];
const moreFruits = ['banana',...fruits,'grapes'];

console.log(moreFruits)

//object

let person1 = { name: 'Deeja', age: 30 };

let newSet = { ...person1, country: 'Australia' };

console.log(newSet);

//Rest Operator

//Used to collect remaining items into an array (mostly in functions):

function sumAll(...numbers){
    return numbers.reduce((sum,num)=>sum+num,0)
}

console.log("Sum is",sumAll(1,2,3,4,5,7));

//...numbers collects all arguments into an array called numbers