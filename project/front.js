//open tab
function toggleSubMenu(button){
button.nextElementSibling.classList.toggle("show")

}

// slide images
function scrollCarousel(direction) {
  const carousel = document.getElementById("gearCarousel");
  const scrollAmount = 300;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// open images
function openImageModal(img) {
  // box
  const modal = document.getElementById("imageModal");
  // img tag
  const modalImg = document.getElementById("modalImage");

  //img tag is like pressed img
  modalImg.src = img.src;
  // shows box
  modal.classList.add("show");
}

function closeImageModal() {
  document.getElementById("imageModal").classList.remove("show");
}

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobileMenuBtn");
  const overlay = document.getElementById("sidebarOverlay");
  const sidebar = document.getElementById("sidebar");

  if (!btn || !overlay || !sidebar) return;

  const setOpen = (open) => {
    document.body.classList.toggle("sidebar-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  btn.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("sidebar-open"));
  });

  overlay.addEventListener("click", () => setOpen(false));
});

// Mobile swipe support for carousel
(function () {
  const carousel = document.getElementById("gearCarousel");
  if (!carousel) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
  }, { passive: true });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX;
    const walk = startX - x;
    carousel.scrollLeft = scrollLeft + walk;
  }, { passive: true });

  carousel.addEventListener("touchend", () => {
    isDown = false;
  });
})();
