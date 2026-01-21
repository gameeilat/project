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
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modalImg.src = img.src;
  modal.classList.add("show");
}

function closeImageModal() {
  document.getElementById("imageModal").classList.remove("show");
}
