//Basic
console.log('Hello World');


//Variable
let number=3;
let name='somu';
console.log(number);
console.log(name);


//primitive/value type
let num=4; // number
let str='somu'; // string literal
let bool=true; // boolean
let first=undefined; // undefined((or)let first;)
let last=null; //null
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof first);
console.log(typeof last);


//reference type
    //object literals
let car = {
    color: 'blue & red',
    model: 2022
}; 
console.log(car);
//dot notation
console.log(car.color);

   //Arrays
let selectLanguage=['c','cpp','java','kotlin','python','javascript'];
console.log(selectLanguage);
//one element
console.log(selectLanguage[5]);

    //functions
function base(){
    console.log('hello');
}
base();
//with parameter
function person(name){
    console.log('the name is '+name);
}
person('somu');



