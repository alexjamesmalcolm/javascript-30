import sounds from "./sounds.js";
import keys from "./keys.js";
const el = domstring => {
  const html = new DOMParser().parseFromString(domstring, "text/html");
  return html.body.firstChild;
};

console.time("document ready");
window.onload = () => {
  console.timeEnd("document ready");
  const soundsElement = document.querySelector("#sounds");
  sounds.forEach(sound => {
    new Audio(sound.source);
    const playSound = () => {
      const audioElement = new Audio(sound.source);
      audioElement.volume = 0.25;
      audioElement.play();
      buttonElement.classList.add("active");
      setTimeout(() => buttonElement.classList.remove("active"), 1000);
    };
    const buttonElement = el(
      `<button><p class="button-key">${sound.key}</p><p class="button-description">${sound.name}</p></button>`
    );
    soundsElement.appendChild(buttonElement);
    buttonElement.onclick = playSound;
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === keys[sound.key]) {
        playSound();
      }
    });
  });
};
