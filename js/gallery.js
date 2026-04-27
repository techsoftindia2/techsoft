const galleryImages = [
 {src: "img/gallery/photo_1.jpg", desc: "Our Classroom Session"},
 {src: "img/gallery/photo_2.jpg", desc: "Interactive Learning"},
 {src: "img/gallery/photo_3.jpg", desc: "Hands-on Coding Practice"},
 {src: "img/gallery/photo_4.jpg", desc: "Group Discussions"},
 {src: "img/gallery/photo_5.jpg", desc: "Project Development"},
 {src: "img/gallery/photo_6.jpg", desc: "Mentorship in Action"}
];

$(document).ready(function() {
    const $carousel = $(".gallery-carousel");

    // Dynamically inject images into the carousel
    galleryImages.forEach(img => {
        $carousel.append(`
            <div class="gallery-item">
                <div class="position-relative overflow-hidden" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <img class="img-fluid w-100" src="${img.src}" alt="${img.desc}" style="height: 250px; object-fit: cover;">
                    <div class="bg-light text-center p-4">
                        <h5 class="m-0">${img.desc}</h5>
                    </div>
                </div>
            </div>
        `);
    });

    // Initialize Owl Carousel with existing project styles
    $carousel.owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
            576: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});
