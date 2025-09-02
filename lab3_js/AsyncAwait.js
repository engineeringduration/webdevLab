function displayData(data){
    alert(data);
}

function add(a,b,callback){
    setTimeout(()=>{
        let op = a+b;
        callback(op)
    },4000)
}

add(10,20,displayData)

//map and modify the data from api call and reflect
let op = [1,2,3,4,5,6];

let data = op.map((ele)=>{
    return ele*2;
})

alert(data);

//
let op = [1,2,3,4,5,6];
let arr2 =[];

// let data = op.filter((ele,index,arr)=>{
    
    
    let data = op.forEach((ele)=>{
        if(ele>3){
            arr2.push(ele)
        }
    })
// })

alert(arr2)


//     for(let i=0;i<op.length;i++){
//         if(op[i]>3){
//             arr2.push(op[i])
//         }
        
//     }
// alert(arr2)

//finding no of ovels 
let str ="samrat killedar kolhapur pune, kit clg ok"
let ans =[0,0,0,0,0];

let newStr= str.split("");
let data1 = newStr.forEach((ele)=>{
    if(ele=='a')ans[0]++;
    else if(ele=='e')ans[1]++;
    else if(ele=='i')ans[2]++;
    else if(ele=='o')ans[3]++;
    else if(ele=='u')ans[4]++;
    
})

alert(ans)

///
let str ="samrat killedar kolhapur pune, kit clg ok"
let ans =[0,0,0,0,0];

let newStr= str.split("");
let vowelArr = ['a','e','i','o','u']

function checkStr(ele1){
    let checkOP = newStr.filter((ele)=>{
        return ele ===ele1;
    });
    return checkOP.length;
}

for(let i=0;i<vowelArr.length;i++){
    let op = checkStr(vowelArr[i])
    alert(vowelArr[i]+"--->"+op)
}