document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.querySelector(".close-lightbox");

    document.querySelectorAll(".lightbox-trigger img").forEach(img => {
        img.addEventListener("click", function (e) {
            e.preventDefault();
            lightbox.style.display = "flex"; // Show the modal
            lightboxImg.src = this.src; // Set the clicked image as the modal image
        });
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
