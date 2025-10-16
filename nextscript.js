document.addEventListener("DOMContentLoaded", () => {
  // --- Modal functions ---
  function openModal(imgSrc, smallImgSrc, description) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const smallImg = document.getElementById("smallImg");
    const caption = document.getElementById("caption");

    if (!modal || !modalImg || !smallImg || !caption) return;

    modal.style.display = "flex";
    modalImg.src = imgSrc || "";
    smallImg.src = smallImgSrc || "";
    caption.innerHTML = description || "";
  }

  function closeModal(event) {
    const modal = document.getElementById("modal");
    if (!modal) return;
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  }

  function openInnerZoom(event) {
    event.stopPropagation();
    const innerModal = document.getElementById("innerModal");
    const innerZoomImg = document.getElementById("innerZoomImg");
    const smallImg = document.getElementById("smallImg");
    if (!innerModal || !innerZoomImg || !smallImg) return;
    innerZoomImg.src = smallImg.src || "";
    innerModal.style.display = "flex";
  }

  function closeInnerModal(event) {
    const innerModal = document.getElementById("innerModal");
    if (!innerModal) return;
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
      innerModal.style.display = "none";
    }
  }

  // Expose globally for inline onclicks
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.openInnerZoom = openInnerZoom;
  window.closeInnerModal = closeInnerModal;

  // --- Envelope popup & back button ---
  const backButton = document.getElementById("backButton");
  const envelopePopup = document.getElementById("envelopePopup");
  const openFlower = document.getElementById("openFlower");

  if (backButton && envelopePopup) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      envelopePopup.style.display = "flex";
    });
  }

  if (openFlower) {
    openFlower.addEventListener("click", () => {
      envelopePopup.style.display = "none";
      window.location.href = "index.html";
    });
  }

  // --- Music (plays only on this page) ---
  const music = document.getElementById("bgMusic");
  if (music) {
    // Wait for user interaction to start (avoids autoplay block)
    const startMusic = () => {
      if (music.paused) {
        music.play().catch(() => console.log("Autoplay blocked — waiting for user click"));
      }
      document.removeEventListener("click", startMusic);
    };
    document.addEventListener("click", startMusic);

    console.log("Music initialized (plays only while on this page).");
  }

  console.log("nextscript.js initialized (no music continuation).");
});
