    const galleryImages = [
        {src: "../img/gallery/photo (1).jpg", desc: "TechSoft India, Lucknow"},
        {src: "../img/gallery/photo (2).jpg", desc: "TechSoft India, Lucknow"},
        {src: "../img/gallery/photo (3).jpg", desc: "TechSoft India, Lucknow"},
        {src: "../img/gallery/photo (4).jpg", desc: "TechSoft India, Lucknow"},
        {src: "../img/gallery/photo (5).jpg", desc: "TechSoft India, Lucknow"},
        {src: "../img/gallery/photo (6).jpg", desc: "TechSoft India, Lucknow"}
    ];

    let galleryCurrentIndex = 0;
    const galleryImageElement = document.getElementById("gallery-image");
    const galleryDescriptionElement = document.getElementById("gallery-description");

    function galleryShowImage(index) {
        galleryImageElement.src = galleryImages[index].src;
        galleryDescriptionElement.textContent = galleryImages[index].desc;
    }

    function galleryPrevImage() {
        galleryCurrentIndex = (galleryCurrentIndex - 1 + galleryImages.length) % galleryImages.length;
        galleryShowImage(galleryCurrentIndex);
    }

    function galleryNextImage() {
        galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryImages.length;
        galleryShowImage(galleryCurrentIndex);
    }

    // Listen for keyboard arrow key events
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        galleryPrevImage();
    } else if (event.key === "ArrowRight") {
        galleryNextImage();
    }
});