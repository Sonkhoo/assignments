
const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    console.log(`${hour}:${minute}:${second}`);
}
setInterval(function () {
    getTime();
},1000)

const getTimeinAMPM = () => {
    const date = new Date();
    let hour = 21
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    console.log(`${hour}:${minute}:${second} ${ampm}`);
}
setInterval(function () {
    getTimeinAMPM();
},1000)