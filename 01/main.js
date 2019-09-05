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
    const playSound = () => {
      const audioElement = new Audio(sound.source);
      audioElement.play();
    };
    const buttonElement = el(
      `<button><p>${sound.name}</p><p>key: ${sound.key}</p></button>`
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
