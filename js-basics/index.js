//let name = 'Benny';
//console.log(name);

//Cannot be a reserved keywords
//Should be meaningful
//Cannot start with a number(1name)
//Cannot contain a space or hyphen(-)
//Are Case Sensitive

//let for variable
//let firstName = 'Benny';
//let lastName = 'Palaparthy';

//const for a constant
//const interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate)

//Primtive types(String, Number, Boolean, undefined, null)
 //let name = 'Benny';//String Literal
 //let age = 16;//Number Literal
 //let isApproved = true;//Boolean Literal
 //let firstName = undefined;//defaultly undefined
 //let selctedcolor= null;//clear the value of a variable

//Reference Types(Objects, Arrays, Functions)
//let name = 'Benny';
//let age = 16;
//let person = {name: 'Benny',age: 16};

//console.log(person);
//dot notation
//person.name = 'John';
//console.log(person.name);

//Bracket notation
//person['name'] = 'Mary';
//console.log(person.name);
//console.log(person['name']);
//let selection = 'name';
//person[selection] = 'Mary';
//console.log(person.name);

//let selectedColors = ['red', 'blue'];//Array Literal
//console.log(selectedColors[0]);
//selectedColors[2] = 'green';
//console.log(selectedColors.length);

//Performing a task
//function greet(name, lastName) {
    //console.log('Hello ' + name + ' ' + lastName);}


//function square(number) {
    //return number*number;}


//greet('Benny', 'Lazarus Kamal');
//greet('Sonu', 'Palaparthy');
//let number = square(2);
//console.log(number);
//console.log(square(2));

//let x = 3;
//let y = 2;
//product = x * y;
//console.log(product);

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

/*var num1 = 10;
//Increment
num1++;
//Decrement
num1--;


function greeting(yourName) {
    var result = 'Hello ' + name;//String Concatenation
    console.log(result);
}

var name = prompt("What's your name?")
greeting(name);*/

//While Loops
/*var num = 0;

while (num < 100){
    num++;
    console.log(num);
}*/

//For Loop
/*for (let num = 0; num<=100; num++){
    console.log(num);
}

let fruit = 'banana';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(''));

//Arrays
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana','apple','orange','pineapples');

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

 for (let i = 0; i<fruits.length; i++) {
     console.log(fruits[i]);
 }

 //array common methods
 console.log('to string', fruits.toString());
 console.log(fruits.join(' * '));
 console.log(fruits.pop(), fruits);//removes last item
 console.log(fruits.push('blackberry'), fruits);//appends
 fruits[4] = 'new fruit';
 console.log(fruits[4]);
 fruits[fruits.length] = 'old fruit';
 console.log(fruits)
 fruits.shift();//removes first element from array
 console.log(fruits);
 fruits.unshift('kiwi');//addds first element to an array 
 console.log(fruits)
 
 let vegetables = ['tomato', 'potato', 'brocolli'];
 let allGroceries = fruits.concat(vegetables);//cobine arrays
 console.log(allGroceries);
 console.log(allGroceries.slice(1, 4));
 console.log(allGroceries.reverse()); 
 console.log(allGroceries.sort());


 let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
 console.log(someNumbers.sort(function(a, b){return a-b}));

 let emptyArray = new Array();
 for (let num = 0; num < 10; num++){
     emptyArray.push(num);
 }
 console.log(emptyArray);*/

 /*let student = {first: 'Benny', 
    last: 'Lazarus', 
    age: 16, 
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
 //console.log(student.first);
 //console.log(student.last);
 //student.first = 'not Benny';
 //console.log(student.first);
 student.age++;
 console.log(student.age);
 console.log(student.studentInfo());*/


 //&& AND
 // || or
 /*let age = prompt('What is your age?');

if ( (age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
}   else {
    status = 'not my audience';
    console.log(status);
}*/

//Switch Statement
/*switch(2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);*/

//Challenge 1: Your Age in Days

/*function ageInDays(){
    var birthYear = prompt("Which year were you born?");
    var ageInDayss = (2020 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}*/