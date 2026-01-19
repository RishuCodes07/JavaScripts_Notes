//advanced javascript 
//closure : Function that remember's the enviroment
function fetchData(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let success = false;
        if(success){
            resolve("Data fetched successfully added !")
        }else{
            reject("Error fetching data")
        }
     },3000);

    }) 
}

fetchData()
    .then((data)=>{
    console.log(data);
    })
    .catch((error)=>{
    console.error(error);

    })

// Advanced JavaScript
function sayHello(){
    console.log("Hello mate!")
}
setTimeout(() => {
    sayHello();
}, 2000);
for(let i=0; i<10;i++){
    console.log(i);

}