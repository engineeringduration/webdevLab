//let arr = [1,90,2,91,3,89,4,87,5,85,75,8,9,38,93,90];
//let arr = [2,3,4,5,2,1,9]

//let arr = ['shivam','sam', 'sita','akabar','birbal', 'rohit','zed']
let arr = ['2','3','4','5','2','1','9']
let arr1 = ['2','3','4','5','2','1','9']

// let op = arr.sort(function(a,b){
//     return a-b;
// });  for the integers

let op = arr.sort();//for strings

console.log(op);

console.log(typeof(arr)+" -------++------ "+typeof(arr1))

if(arr== arr1){
    console.log("IN If")
}else{
    console.log("in Else part")
}

let str = "roHiT mAne RohIt Mane";
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.split("o"))
// console.log(str.split(2,6))
console.log(str.split(" ").reverse().join().toUpperCase());