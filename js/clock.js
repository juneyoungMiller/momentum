//const clock = document.querySelector("h2#clock");
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const se = document.querySelector("#se");

//clock.innerText="00:00:00"

function getClock(){
  const date = new Date();
 
  //document.getElementById("clock").innerHTML =date.toLocaleTimeString();
  
  const hours =   String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //clock.innerText = `${hours} : ${minutes} : ${seconds} `
  hr.innerText = `${hours}`;
  mn.innerText = minutes;
  se.innerText = seconds;

}
getClock()
setInterval(getClock, 1000);