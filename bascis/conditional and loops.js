// //if else Condition
let n=18;
if(n>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}

// //nested if
let n=-3;
if(n>0){
    console.log("Positive Number");
}
else if(n<0){
    console.log("Negative Number");
}
else{
    console.log("Zero");
} 

//switch 

let n=5;
switch(n){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
    console.log("Invalid days");
}

//for loop

let n=5;
for(let i=0;i<n;i++){
    console.log(i);
}

//while loop

let c=0;
while (c<5){
    console.log(c);
    c++;
}

// //do while loop

let i=0;
do{
     console.log(i);
     i++;
}while(i<5);
 
//print prime number 

let start = 0;
let end = 20;
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    }
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

//for in

const myObject = { a: 1, b: 2, c: 3 };
for (const key in myObject) {
    console.log(key); 
    console.log(myObject[key]); 
}

// for of

    const myArray = [10, 20, 30];
    for (const value of myArray) {
      console.log(value); 
    }

    const myString = "hello";
    for (const char of myString) {
      console.log(char); 
    }

 
 
 
 
 
 
 
 
 
 





