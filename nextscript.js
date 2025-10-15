// 🌸 Open main modal
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

// 🌹 Close main modal
function closeModal(event) {
  if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
    document.getElementById("modal").style.display = "none";
  }
}

// 💮 Open inner zoom
function openInnerZoom(event) {
  event.stopPropagation();
  const innerModal = document.getElementById("innerModal");
  const innerZoomImg = document.getElementById("innerZoomImg");
  innerZoomImg.src = document.getElementById("smallImg").src;
  innerModal.style.display = "flex";
}

// 🌼 Close inner zoom
function closeInnerModal(event) {
  if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
    document.getElementById("innerModal").style.display = "none";
  }
}

const backButton = document.getElementById("backButton");
const envelopePopup = document.getElementById("envelopePopup");
const openFlower = document.getElementById("openFlower");

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  envelopePopup.style.display = "flex";
});

openFlower.addEventListener("click", () => {
  envelopePopup.style.display = "none";
  window.location.href = "index.html";
});
