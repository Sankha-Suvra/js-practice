const clock = document.getElementById('clock')




setInterval(function(){  //runs a given method continuously wrt given time
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerText = date.toLocaleTimeString();
}, 1000)