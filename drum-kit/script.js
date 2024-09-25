const soundClicked = document.getElementById("soundClicked");

const buttonMap = {
  a: "clap",
  s: "hihat",
  d: "kick",
  f: "openhat",
  g: "boom",
  h: "ride",
  j: "snare",
  k: "tom",
  l: "tink",
};

function handleClick(e) {
  const sound = buttonMap[e.key];
  if (sound) {
    playSound(sound);
  }
}

function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  soundClicked.innerText = `hai suonato ${sound}`;

  // audio.play()
}
window.addEventListener("keydown", handleClick);
