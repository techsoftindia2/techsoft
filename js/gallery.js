const galleryImages = [
    {src: "../img/gallery/photo_1.jpg", desc: "TechSoft India, Lucknow"},
    {src: "../img/gallery/photo_2.jpg", desc: "TechSoft India, Lucknow"},
    {src: "../img/gallery/photo_3.jpg", desc: "TechSoft India, Lucknow"},
    {src: "../img/gallery/photo_4.jpg", desc: "TechSoft India, Lucknow"},
    {src: "../img/gallery/photo_5.jpg", desc: "TechSoft India, Lucknow"},
    {src: "../img/gallery/photo_6.jpg", desc: "TechSoft India, Lucknow"}
];

let galleryCurrentIndex = 0;
let isAnimating = false;

const galleryCarousel = document.querySelector(".gallery-carousel");
let galleryImageElement = document.getElementById("gallery-image");
const galleryDescriptionElement = document.getElementById("gallery-description");

function galleryShowImage(newIndex, direction) {
    if (isAnimating) return; // prevent multiple triggers
    isAnimating = true;

    const oldImage = galleryImageElement;
    const newImage = document.createElement("img");

    // set up new image
    newImage.src = galleryImages[newIndex].src;
    newImage.alt = galleryImages[newIndex].desc;
    newImage.className = "gallery-image";

    // starting position (off-screen)
    newImage.classList.add(direction === "next" ? "slide-in-right" : "slide-in-left");

    // add new image to carousel
    galleryCarousel.appendChild(newImage);

    // force reflow to trigger transition
    void newImage.offsetWidth;

    // animate
    oldImage.classList.add(direction === "next" ? "slide-out-left" : "slide-out-right");
    newImage.classList.remove("slide-in-left", "slide-in-right");
    newImage.classList.add("slide-active");

    // cleanup after animation
    newImage.addEventListener("transitionend", () => {
        galleryCarousel.removeChild(oldImage);
        newImage.id = "gallery-image"; 
        galleryImageElement = newImage; // update reference
        galleryDescriptionElement.textContent = galleryImages[newIndex].desc;
        galleryCurrentIndex = newIndex;
        isAnimating = false;
    }, { once: true });
}

function galleryPrevImage() {
    const newIndex = (galleryCurrentIndex - 1 + galleryImages.length) % galleryImages.length;
    galleryShowImage(newIndex, "prev");
}

function galleryNextImage() {
    const newIndex = (galleryCurrentIndex + 1) % galleryImages.length;
    galleryShowImage(newIndex, "next");
}

// 🔹 Keyboard navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        galleryPrevImage();
    } else if (event.key === "ArrowRight") {
        galleryNextImage();
    }
});

// 🔹 Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

galleryCarousel.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].screenX;
});

galleryCarousel.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            galleryPrevImage();
        } else {
            galleryNextImage();
        }
    }
});
