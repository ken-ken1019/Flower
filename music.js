// music.js
(function() {
  // Prevent creating multiple players
  if (window._musicInitialized) return;
  window._musicInitialized = true;

  // Create persistent audio element
  const audio = document.createElement("audio");
  audio.id = "bgMusic";
  audio.src = "pics/daylight.mp3"; // <-- replace with your file
  audio.loop = true;
  audio.volume = 0.5;

  // Try to resume if allowed
  document.addEventListener("click", () => {
    if (audio.paused) audio.play().catch(() => {});
  });

  // Store reference globally
  window.bgMusic = audio;
  document.body.appendChild(audio);

  // Play if it was marked in localStorage
  if (localStorage.getItem("musicPlaying") === "true") {
    audio.play().catch(() => {});
  }

  // Keep track of play/pause status
  audio.addEventListener("play", () => localStorage.setItem("musicPlaying", "true"));
  audio.addEventListener("pause", () => localStorage.setItem("musicPlaying", "false"));

  console.log("Persistent background music initialized");
})();
