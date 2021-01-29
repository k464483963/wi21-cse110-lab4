let d = new Date();
let time = d.toLocaleTimeString();

function setIN(){
    setInterval(function (){console.log(time)},1000);
}

setIN();
