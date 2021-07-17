let c = document.querySelector('#clock');
let info = document.querySelector('#info');
let value = document.querySelector('#value');
let progress = document.querySelector('#progress-bar');
// let y = document.querySelector('span #year');
// let d = document.querySelector('span #date');
// let m = document.querySelector('span #month');
// let w = document.querySelector('span #week');


function clock(){

  let today = new Date();
  let h = formatTime(today.getHours());
  let m = formatTime(today.getMinutes());
  let s = formatTime(today.getSeconds());

  let full_year = today.getFullYear();
  let date = formatTime(today.getDate());
  let month = formatTime(today.getMonth());
  const x = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = x[today.getDay()];

  let realHour;
  let am;


  if( h > 12 ){
    am = "PM";
    realHour = h - 12;
  }else{
    am = "AM";
    realHour = h;
  }
  progress.style.width = (s/60) * 100 + "%";

  info.innerHTML = `${full_year} - ${month} - ${date} ${day}`;
  value.innerHTML = `${h} : ${m} : ${s} ${am}`;

}

function formatTime(time) {
 return time <10 ? `0${time}` : time; 
}

clock();
setInterval( () => {
  clock.innerHTML = clock();
}, 1000);
