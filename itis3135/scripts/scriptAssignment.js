function jsAssignment(){
    const time = new Date(hours,minutes);
    const date = new Date(day,month,year);
    document.getElementById("date-time").innerHTML = "Today is "+time+" on "+date;
}