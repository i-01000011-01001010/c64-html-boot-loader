// HTML C64 Boot Loader
// Plain HTML, CSS, and JavaScript, no emulator involved.
// Originally built for a personal project by Corey J. Mihalko (CJ),
// shared here for everyone, C64 lovers especially.
//
// Everything you need to customize for your own site lives in the two
// constants right below. Nothing else needs to change for basic use.

(() => {
  // The "program" name shown in the LOAD "..." line. Traditionally an
  // ALL-CAPS, no-spaces name in classic C64 style, but it can be anything.
  const PROGRAM_NAME = "YOUR-NAME";

  // Where the browser goes once the boot sequence finishes.
  const TARGET_URL = "index.html";

  const typedEl = document.getElementById("typed");
  const cursorEl = document.getElementById("cursor");

  const TYPE_DELAY = 60; // ms per character while "typing" the LOAD line
  const pause = ms => new Promise(r => setTimeout(r, ms));

  async function typeText(text){
    for(const ch of text){
      typedEl.textContent += ch;
      await pause(TYPE_DELAY);
    }
  }

  async function run(){
    await typeText(`LOAD "${PROGRAM_NAME}",8,1`);
    typedEl.textContent += "\n";
    await pause(450);

    typedEl.textContent += `SEARCHING FOR ${PROGRAM_NAME}\n`;
    await pause(600);

    typedEl.textContent += "LOADING\n";
    await pause(800);

    typedEl.textContent += "READY.\n";
    await pause(350);

    await typeText("RUN");
    typedEl.textContent += "\n";
    await pause(500);

    cursorEl.style.display = "none";
    window.location.href = TARGET_URL;
  }

  run();
})();
