    const galleryImages = [
        {src: "../techsoft/img/gallery/photo_1.jpg", desc: "TechSoft India, Lucknow"},
        {src: "../techsoft/img/gallery/photo_2.jpg", desc: "TechSoft India, Lucknow"},
        {src: "../techsoft/img/gallery/photo_3.jpg", desc: "TechSoft India, Lucknow"},
        {src: "../techsoft/img/gallery/photo_4.jpg", desc: "TechSoft India, Lucknow"},
        {src: "../techsoft/img/gallery/photo_5.jpg", desc: "TechSoft India, Lucknow"},
        {src: "../techsoft/img/gallery/photo_6.jpg", desc: "TechSoft India, Lucknow"}
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