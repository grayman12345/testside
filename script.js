const lightboxLinks = document.querySelectorAll(".lightbox");
const overlay = document.getElementById("lightboxOverlay");
const overlayImage = document.getElementById("lightboxImage");

lightboxLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    overlayImage.src = this.href;
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  overlayImage.src = "";
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").style.display = "block";
  this.reset();
});
