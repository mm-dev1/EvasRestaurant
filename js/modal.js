document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const modal = document.getElementById("aboutModal");
    const closeModal = document.querySelector(".close");
    const fullTextContent = document.getElementById("fullTextContent");
    const fullText = document.querySelector(".full-text").innerHTML;

    readMoreBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        fullTextContent.innerHTML = fullText; // Load full text into modal
        modal.style.display = "flex"; // Show modal
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal on close
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
