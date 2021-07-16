let c = document.querySelector('#clock');
let info = document.querySelector('#info');
let value = document.querySelector('#value');
// let y = document.querySelector('span #year');
// let d = document.querySelector('span #date');
// let m = document.querySelector('span #month');
// let w = document.querySelector('span #week');


function clock(){

  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  let full_year = today.getFullYear();
  let date = today.getDate();
  let month = today.getMonth();
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

  info.innerHTML = `${full_year} - ${month} - ${date} ${day}`;
  value.innerHTML = `${h} : ${m} : ${s} ${am}`;

  // return `${realHour} : ${m} : ${s} ${am} ${month} - ${full_year} - ${day} `;

  // w.innerHTML = day;
  // y.innerHTML = full_year;
  // m.innerHTML = month;
  // d.innerHTML = date;


}

clock();
setInterval( () => {
  clock.innerHTML = clock();
}, 1000);


// setTimeout function
// setTimeout(function(){
//   /////////statement
// }, 1000);

// btn_stop.onclick =() => {
//   clearTimeout(countTimeout);
// }