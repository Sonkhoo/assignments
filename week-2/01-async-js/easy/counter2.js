let a=0
const counter = (a)=>{
    console.log(a++);

setTimeout(() => {
    counter(a)
}, 1000)
}

counter(a)
