//ares of Rectangle

function Area(len,bre){
    console.log("Area of Rectangle :"+len*bre);
}
Area(5,6);


//Perimetr of Recatngle

function Perimeter(l,w){
    console.log("Perimeter of rectangle: "+(2*(l+w)));
}
Perimeter(20,10);

//if condition in function
function Vote( age){
    if(age>=18){
        console.log("Eligible to vote");
    }else{
        console.log("Not Eligible to vote");
    }
}
Vote(22);

//for loop -functions
function Number(num){
    for(let i=0;i<num;i++){
        console.log(i);
    }
}
let num=prompt("Enter the Number : ");
Number(num);

//while
function Number(n){
    let rev=0;
    while(n!=0){
        let l=n%10;
        rev=rev*10+l;
        n=Math.floor(n/10);
    }
    console.log(rev);
}
Number(1234);

// return function
function Greet(){
    return "Hello Everyone";
}
let a=Greet();
console.log(a);


//arrow function
let check=(n)=>{
    if(n%2==0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(check(12));
 
 //product of the number
let mul=function(a,b){
    console.log("product of the numbers: "+a*b);
} 
mul(2,3);


