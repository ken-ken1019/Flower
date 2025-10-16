// music.js
(function() {
  // Prevent creating multiple players
  if (window._musicInitialized) return;
  window._musicInitialized = true;

  // Create persistent audio element
  const audio = document.createElement("audio");
  audio.id = "bgMusic";
  audio.src = "pics/daylight.mp3"; // <-- change to your music file
  audio.loop = true;
  audio.volume = 0.5;

  // Append to the page
  document.body.appendChild(audio);

  // Try to play when the user clicks anywhere
  document.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
    }
  });

  // Store global reference
  window.bgMusic = audio;

  // --- Music play state only lasts during this browser session ---
  // Keep music playing between pages
  sessionStorage.setItem("musicPlaying", "true");

  // Try to resume if coming from another page in same session
  if (sessionStorage.getItem("musicPlaying") === "true") {
    audio.play().catch(() => {});
  }

  // If user closes the tab, music will reset next time (sessionStorage clears)
  window.addEventListener("beforeunload", () => {
    sessionStorage.removeItem("musicPlaying");
  });

  console.log("Background music initialized for this session.");
})();
