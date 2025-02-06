function updateUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString(); 
  document.querySelector(".js-time").textContent = utcTime;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();