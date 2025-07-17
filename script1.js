//Write a function to reverse a string.

console.log('Write a function to reverse a string.');
const string = 'hello world';

function reverseString(){

    const reverseString = string.split('').reverse().join('');

    console.log(reverseString)

}

reverseString();

//Create a function to check if a string is a palindrome.

function palindrome(num){
    const number = num;
    let n,rev=0;
    while(num>0){
        n=num%10;
        rev = rev*10+n;
        num=Math.floor(num/10);
    }
    console.log(`Reverse ${rev} and Number is ${number}`)
    if(rev === number){
        console.log("Number is palindrome")
    }else{
        console.log('Number is not palindrome')
    }
}

palindrome(414);

// 3. Implement a function to remove duplicates from an array

console.log(' 3. Implement a function to remove duplicates from an array')

function uniqueArray(arr){
     const array = [...new Set(arr)]
     console.log(`Unique array ${array}`);
}

const arr = [2,1,3,4,2,4,5,6,1,1]

uniqueArray(arr);


//Another method 
const uArray =[];
arr.forEach(item=>{if(!uArray.includes(item))uArray.push(item)});
console.log(uArray);

//Another Method
const uniqueArray1 = arr.filter((value,index,self)=>
    self.indexOf(value) === index
// console.log(value,index,self)
);

console.log(uniqueArray1)

// Write a function to merge two sorted arrays into one sorted array.
console.log(' Write a function to merge two sorted arrays into one sorted array.')
const array1 = [3,5,6,8,1];
const array2 = [3,9,0,1,2];
function mergeArraySort(array1,array2){
    const mergeSort = array1.concat(array2).sort();
    console.log(mergeSort);
}

mergeArraySort(array1,array2)