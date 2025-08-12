let data={
    fName: "Rohit",
    lName: "Mane",
    fullName : function() {
        return this.fName + " " + this.lName;
    },
    age: 25,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }

};

// alert(data.fullName());
// alert(data.fName);
// alert(data.lName);
// alert(data.age);

for(let value in data){
    if(typeof data[value] === 'function'){
        //alert(data[value]())
        console.log(data[value]());
    }else if(typeof data[value] === 'object'){
        let obj = data[value];
        for(let key in obj){
            //alert(key + ": " + obj[key]);
            console.log(key + ": " + obj[key]);
        }

    }else{
        //alert(data[value]);
        console.log(data[value]);
    }
    
}

// This code defines a data object with properties and a method to return the full name.
