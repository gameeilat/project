//open tab
function toggleSubMenu(button){
button.nextElementSibling.classList.toggle("show")

}

// slide images, 1 right
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

document.addEventListener("sidebar-loaded", () => {

  const btn = document.getElementById("mobileMenuBtn"); //mobile button
  const overlay = document.getElementById("sidebarOverlay"); //dark background 
  const sidebar = document.getElementById("sidebar"); //the sidebar 

  if (!btn || !overlay || !sidebar) return; //safty check

  const setOpen = (open) => {
    document.body.classList.toggle("sidebar-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }; //if sidebar is open it sets aria expanded to true if it isn't it sets it to false

  btn.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("sidebar-open"));
  }); //when the menu button is clicked it toggles the sidebar

  overlay.addEventListener("click", () => setOpen(false));
}); //closes when the overlay is clicked


// Mobile swipe support for carousel
(function () {
  const carousel = document.getElementById("gearCarousel");
  if (!carousel) return; //safty check

  let isDown = false; //finger touching
  let startX; //starting x position
  let scrollLeft; 

  carousel.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX; //current x finger position - event, fingers, first finger, only x
    scrollLeft = carousel.scrollLeft;
  }, { passive: true }); // removes delay

  carousel.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX;
    const walk = startX - x;
    carousel.scrollLeft = scrollLeft + walk;
  }, { passive: true }); //math stuff

  carousel.addEventListener("touchend", () => {
    isDown = false;
  }); //stops the function
})();
