//Loops in javascript

//for loop
for(let i=4;i<=8;i++){
    console.log(i);
}

for(let j=1;j<=10;j++){
    console.log(j);
    if(j % 2 === 0){
        console.log('reminder 0');
    }
}

//while
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//do..while
let j=1;
do{
    console.log(j);
    j++
}while(j<=5)

//for in loop

let colors = ['red','black','blue','yellow'];
for(let col in colors){
    console.log(col,colors[col]);
 } //key and value
 for(let col in colors){
    console.log(colors[col]);
 }//value

 //for of loop
 for(let col of colors){
    console.log(col);
 }
 

 //array
const num=[1,2,3,4,5];
//string array
const str=['hello','world'];
//mixed array
const mi=[1,2,'hello'];

//array sorting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
