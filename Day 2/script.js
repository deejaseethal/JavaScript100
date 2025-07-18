 //Create a function that finds the maximum number in an array

 const array = [32,21,13,34,65]

 function maxNumber(arr){
    return Math.max(...arr);
 }

 const maximum=maxNumber(array);

 console.log(maximum);

 //Maximum number in an array using loop
let max=0;
 for(let i=0;i<array.length;i++){
   if(array[i]>max){
      max=array[i];
   }
 }

 console.log('Maximum element in an array',max);

 //Maximum number using reduce

 const maximumNumb = array.reduce((max,num)=>num>max?num:max,0)

 console.log('Maximum number using reduce method',maximumNumb)

 