(function() {
  // Prevent multiple instances
  if (window._musicInitialized) return;
  window._musicInitialized = true;

  // Create the audio element
  const audio = document.createElement("audio");
  audio.id = "bgMusic";
  audio.src = "pics/daylight.mp3"; // ← your music file path
  audio.loop = true;
  audio.volume = 0.5;

  // Append to the page
  document.body.appendChild(audio);

  // Play music after any user interaction (to bypass autoplay restrictions)
  const startMusic = () => {
    if (audio.paused) {
      audio.play().catch(() => {
        console.log("Autoplay blocked — waiting for user interaction.");
      });
    }
    document.removeEventListener("click", startMusic);
  };
  document.addEventListener("click", startMusic);

  // Optional: fade in when it starts (for smoother effect)
  audio.addEventListener("play", () => {
    audio.volume = 0;
    const fadeIn = setInterval(() => {
      if (audio.volume < 0.5) {
        audio.volume = Math.min(audio.volume + 0.05, 0.5);
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
  });

  console.log("Background music initialized (plays only on this page).");
})();
