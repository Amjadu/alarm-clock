console.log('this is amjad')
function updateClock(){
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentSeconds= (currentSeconds<10? "0":"")+currentSeconds;
    currentMinutes= (currentMinutes<10? "0":"")+currentMinutes;
    currentHours= (currentHours<10? "0":"")+currentHours;
    let timeOfDay = (currentTime < 12)? "AM":"PM";
    currentHours= (currentHours>12)? currentHours-12:currentHours
    let currentStr = currentHours +":"+ currentMinutes+":"+currentSeconds+" "+ timeOfDay;
document.getElementById('clock').innerHTML=currentStr

}