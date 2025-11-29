// Clock


function hours() {
    let hours = new Date().getHours();

    hours = hours % 12;
    return hours;
}



function minutes() {
    return new Date().getMinutes();
}




function seconds() {
    return new Date().getSeconds();
}





function timeUpdate() {
    document.getElementById("hours").innerHTML = hours();
    document.getElementById("minutes").innerHTML = minutes();
    document.getElementById("seconds").innerHTML = seconds();

    if (new Date().getHours() > 12) {
        document.getElementById("nbox").innerHTML = "PM";
    } else {
        document.getElementById("nbox").innerHTML = "AM";
    }

}
setInterval(timeUpdate, 1000);
timeUpdate();


