const caption =
  "You usually read at about 300 words per minute. However, by removing the need to move your eyes you can easily read much faster. For example, right now you are reading at 400 words per minute which kinda amazing. Now you are up to 500 words per minutes which just goes to show that your mind can achieve far more than you think. Anyway I just thought that I would mention it. Enjoy the rest of your day. Thanks for your visit";

const caption1 = `
halo halo bandung
  `;

//   Hapus semua break line lalu ambil tiap kata dalam paragraf
const words = caption.replace(/(\r\n|\n|\r)/gm, " ").split(" ");

// Tampilkan display text
const elTextDisplay = document.getElementById("text");
function renderText(text) {
  elTextDisplay.innerText = text;
}

let wordIndex = 0;
let interval;
let initialSpeed = 240;

const elBtn = document.getElementById("start");
elBtn.addEventListener("click", () => {
  // CSS for handling disabled button
  elBtn.disabled = true;
  elBtn.classList.toggle("linethrough");

  interval = setInterval(() => {
    if (wordIndex === words.length) {
      clearInterval(interval);
      elBtn.disabled = false;
      elBtn.classList.toggle("linethrough");

      wordIndex = 0;
      elTextDisplay.innerText = "Click again";
    } else {
      renderText(words[wordIndex]);
      wordIndex++;
    }
  }, initialSpeed);
});
