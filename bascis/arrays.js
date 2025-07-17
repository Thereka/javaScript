//array declaration and print
let arr=[11,22,33,44,55];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//array length
let c=arr.length;
console.log("Length of the array :"+c);

//push an element
let b=arr.push(66);
console.log("After push an element in an array :");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//pop an element from the array
let v=arr.pop();
console.log("After pop an element in an array :");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//shift an element from the array
let f=arr.shift();
console.log("After shift an element in an array :");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//unshift an element from the array
let e=arr.unshift(2);
console.log("After unshift an element 2 in an array :");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//shift an element from the array
let g=arr.indexOf(33);
console.log("index an element in an array :" +g);

//shift an element from the array
let h=arr.includes(44);
console.log("index an element in an array :" +h);


//output
11
22
33
44
55
Length of the array :5
After push an element in an array :
11
22
33
44
55
66
After pop an element in an array :
11
22
33
44
55
After shift an element in an array :
22
33
44
55
After unshift an element 2 in an array :
2
22
33
44
55
index an element in an array :2
index an element in an array :true











