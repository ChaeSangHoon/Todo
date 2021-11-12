const clock = document.querySelector("#time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

const dayArray = ["월", "화", "수", "목", "금", "토", "일"];
const dayday = document.querySelector("#day");

function getDay() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let today = dayArray[date.getDay()];
  dayday.innerText = `${month}월 ${day}일 ${today}요일`;
}

getDay();
