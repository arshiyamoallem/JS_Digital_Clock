function getTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let periods = hours >= 12 ? "PM" : "AM";

    hours = updateHourTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    

    document.querySelector(".clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + periods;
}

// Updates time to ensure it is in the format of 00:00:00
function updateTime(i){
    if (i < 10) { i = "0" + i;}
    return i;
}

// Updates hours to ensure it is in the format of 00:00:00 and also converts 24 hour format to 12 hour format
function updateHourTime(i){
    i = i % 12 || 12;
    if (i < 10) { 
        i = "0" + i;
    }
    return i;
}

// each call if independant of the previous call, 
// so it will not cause any issues and run every second to update the time
setInterval(getTime, 1000); 