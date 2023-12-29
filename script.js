//question 1
       //for loop
var arr=[
    {
        "name":"ram",
        "age":"20"
    },
    {
        "name":"raja",
        "age":"30"
    }
]
 for(var i=0;i<arr.length;i++){
    console.log(arr[i].name,arr[i].age)
 }

      //for in loop
 let personDetails={
    "name":"ravi",
    "age":35,
    "gender":"male"
 } 
 console.log(personDetails)
for(let i in personDetails){
    console.log(i)
}

//for of loop
const obj={
    name:"gokul",
    age:25,
    work:"web developer",
    place:"salem"
}
console.log(Object.keys(obj))
for(const val of (Object.keys(obj)))
console.log(val, "=>",obj[val])

// for each loop
const jsonArray = [
    { name: 'John', age: 25 },
    { name: 'ranjith', age: 30 },
    { name: 'vijay', age: 35 }
  ];
  
  jsonArray.forEach((jsonObject) => {
     const name = jsonObject.name;
    const age = jsonObject.age;
  console.log(`Name: ${name}, Age: ${age}`);
  });



//question2
let resume=
{

    "name":"ramadoss",
    "age":"23",    
    "state":"tamilnadu",
    "email":"ramadoss3427@gmail.com",
    "phone.no":"7358834508",
    "gender":"male",
    "education":"b.sc.computerscience",
     "address":[
        {
         "address":"sethukuli",   
         "pincode":'636303',
         "distict":"salem"
         
        }
        
    ]      
    }

   console.log(resume)
