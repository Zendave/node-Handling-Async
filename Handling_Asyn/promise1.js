//By promise we can handle the disadvantages of asynchronous in nodejs
let a=10;
let b=0;
let waitingData=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20)
    },2000) 
})
waitingData.then((data)=>{
    b=data;
    console.log(a+b)
})
