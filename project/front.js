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
