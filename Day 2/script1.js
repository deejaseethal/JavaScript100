//Write a function to calculate the factorial of a number

console.log('6.Write a function to calculate the factorial of a number');
const number =7;

function fact (num){
    if(num===0)
        return 1;
    else if(num>0){
        let result =1;
        for(let i=1;i<num;i++)
            result = result*i
        return result
    }
}
const factorial = fact(number);
console.log('Factorial of number is',factorial)

//Implement a function to find the longest word in a sentence
console.log('5.Implement a function to find the longest word in a sentence')
const sentence = 'hello this is my world of coding and happiness'
const words = sentence.split(' ');
const longestWord = words.reduce((long,word)=>word.length>long.length?word:long)
console.log('longest word is',longestWord)

// Write a function to flatten a nested array.
const flatArray = [1, [2, [3, 4]], 5];
const flattened = flatArray.flat(Infinity);// infinity to flatten any depth.
console.log(flattened);

//Create a function that returns the intersection of two arrays.
arrayInter1=[2,3,1,5,3];
arrayInter2=[3,2,7,8,1,11];
function arrayIntersection(arrayInter1,arrayInter2){
    return arrayInter1.filter(item=>arrayInter2.includes(item))
}

console.log(`Intersection of ${arrayInter1} and ${arrayInter2} is `,arrayIntersection(arrayInter1,arrayInter2));