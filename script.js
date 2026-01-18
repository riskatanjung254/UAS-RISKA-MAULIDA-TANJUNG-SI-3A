document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('darkModeToggle');
    const body = document.body;

    // Fungsi Switch Mode
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Ubah Ikon
            const icon = this.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
            } else {
                icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
            }
        });
    }

    // Carousel tetap sesuai code Anda
    const myCarousel = document.querySelector('#carouselExampleFade');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: false,
            wrap: true
        });
    }
});