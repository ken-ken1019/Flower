function bloomRose(rose) {
  rose.classList.toggle('bloom');

  const music = window.bgMusic;
  if (music && music.paused) {
    music.play().catch(err => console.log("Autoplay blocked:", err));
  }

  setTimeout(() => {
    window.location.href = "nextpage.html";
  }, 1500);
}
