window.onload = () => {
  const lastNewDay = new Date();
  const tickSound = document.querySelector("audio#tick");
  tickSound.volume = 0.1;
  tickSound.load();
  lastNewDay.setHours(0, 0, 0, 0);
  const finishedLoading = () => {
    const clockBody = document.querySelector(".clock-body");
    clockBody.classList.remove("hide");
  };
  const updateHands = () => {
    const currentTime = new Date();
    const seconds = (currentTime.getTime() - lastNewDay.getTime()) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    console.log(hours, minutes, seconds);
    const root = document.documentElement;
    root.style.setProperty("--second", seconds);
    root.style.setProperty("--minute", minutes);
    root.style.setProperty("--hour", hours);
    if (!document.hidden) {
      tickSound.play().catch(() => {});
    }
  };
  const recursiveSetTimeout = callback => {
    const millisecondsTilNextSecond = 1000 - new Date().getMilliseconds();
    setTimeout(() => recursiveSetTimeout(callback), millisecondsTilNextSecond);
    callback();
  };
  recursiveSetTimeout(updateHands);
  updateHands();
  setTimeout(finishedLoading, 300);
};
