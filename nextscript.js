document.addEventListener("DOMContentLoaded", () => {

  // Open main modal
  function openModal(imgSrc, smallImgSrc, description) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const smallImg = document.getElementById("smallImg");
    const caption = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    smallImg.src = smallImgSrc;
    caption.innerHTML = description;
  }

  // Close main modal
  function closeModal(event) {
    const modal = document.getElementById("modal");
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  }

  // Open inner zoom modal
  function openInnerZoom(event) {
    event.stopPropagation();
    const innerModal = document.getElementById("innerModal");
    const innerZoomImg = document.getElementById("innerZoomImg");
    const smallImage = document.getElementById("smallImg");

    innerZoomImg.src = smallImage.src;
    innerModal.style.display = "flex";
  }

  // Close inner zoom modal
  function closeInnerModal(event) {
    const innerModal = document.getElementById("innerModal");
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
      innerModal.style.display = "none";
    }
  }

  // Expose functions globally
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.openInnerZoom = openInnerZoom;
  window.closeInnerModal = closeInnerModal;

  // Envelope popup logic
  // Envelope popup logic
const backButton = document.getElementById("backButton");
const envelopePopup = document.getElementById("envelopePopup");
const envelope = document.querySelector(".envelope");
const openFlower = document.getElementById("openFlower");

if (backButton && envelopePopup) {
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    envelopePopup.style.display = "flex";

    // Animate envelope flap open
    setTimeout(() => {
      envelope.classList.add("flap-open");
    }, 100); // slight delay for smooth effect
  });
}

if (openFlower && envelopePopup) {
  openFlower.addEventListener("click", () => {
    // Animate flap close before redirect
    envelope.classList.remove("flap-open");
    setTimeout(() => {
      envelopePopup.style.display = "none";
      window.location.href = "index.html";
    }, 600); // match transition duration
  });
}


  // Background music autoplay handling
  const music = document.getElementById("bgMusic");
  if (music) {
    const startMusic = () => {
      if (music.paused) {
        music.play().catch(() => console.log("Autoplay blocked — user must click."));
      }
      document.removeEventListener("click", startMusic);
    };
    document.addEventListener("click", startMusic);
  }

  console.log("nextscript.js loaded — music plays fresh each visit, no duplication.");

});
