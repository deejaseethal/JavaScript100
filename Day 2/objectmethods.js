//Create an object person with properties name and birthYear. Add a method calculateAge() that returns the person’s age based on the current year.

console.log('Create an object person with properties name and birthYear. Add a method calculateAge() that returns the person’s age based on the current year.')

const person = { name:'deeja', 
                 birthYear:1991,
                 calculateAge:function(){
                    const currentYear = new Date().getFullYear();
                    const currentAge = currentYear-this.birthYear;
                    console.log(`Current age of ${this.name} is ${currentAge} `);
                 }};

person.calculateAge();

//Create an object user with a method greet() that returns "Hello, [name]!" using this.name.

const hello = {name:'rama',
               greet : function(){
                console.log(`Hello world,this is ${this.name}`)
               } 
}

hello.greet();

//Write a function countProperties(obj) that returns the number of properties in a given object.

console.log('3.Write a function countProperties(obj) that returns the number of properties in a given object.');

const book = {title:'My Book',pages:200,author:'Jane'}

function countProperties(obj){
     return Object.keys(obj).length;
}

const length = countProperties(book);
console.log("No. of properties of book is",length);

//Given an array of student objects with name and score, write a function to return the student with the highest score.

console.log('Given an array of student objects with name and score, write a function to return the student with the highest score.');

const students =[ { name:'Ashna', score:67},
                  { name:'radha', score:56 },
                  { name:'kitty', score:98 }
                 ]

 const highestScore = students.reduce((high,student)=>student.score>high?student:null);
 
 console.log(highestScore);

 //Write a function objectToArray(obj) that converts an object into an array of key-value pairs.

 console.log('Write a function objectToArray(obj) that converts an object into an array of key-value pairs.');

 const info = {name:'Deeja',role:'Developer'}

 console.log(Object.entries(info));

 //Write a function groupByAge(people) that takes an array of people objects and groups them by age.

 console.log('Write a function groupByAge(people) that takes an array of people objects and groups them by age.');

 const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 25 },
  { name: "Dan", age: 30 }
];

function groupByAge(){
    const result = {}

    for(let person of people){
        const age = person.age;
    
        if(!result[age]){
            result[age]=[]; //create an array if it doesn't exist
        }

        result[age].push(person)
    }

    return result;
}

console.log(groupByAge(people));

// Using reduce method

function groupByReduceMethod(){

    const groupAge = people.reduce((result,person)=>{!result[person.age]?result[person.age]=[]:null
    result[person.age].push(person) 
    return result,{}});
     
    console.log(groupAge);
}

groupByReduceMethod();