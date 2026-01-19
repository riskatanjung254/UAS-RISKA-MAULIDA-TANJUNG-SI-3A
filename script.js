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

    const reviewForm = document.getElementById('reviewForm');

    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            // 1. Mencegah halaman refresh otomatis
            event.preventDefault();

            // 2. Mengambil data dari inputan
            const name = document.getElementById('nama').value;
            const ig = document.getElementById('ig').value;
            const email = document.getElementById('email').value;
            // Catatan: Anda belum memberi ID pada input "Reason Joined COER", 
            // tapi tombol tetap aktif tanpa itu.

            // 3. Menampilkan notifikasi sukses (Bahasa Inggris sesuai tema)
            alert("Thank you, " + name + "!\nYour review for CORTIS has been successfully submitted.\nWe will keep in touch via @" + ig);

            // 4. Log data ke console (untuk pengecekan mandiri)
            console.log("Submission received:", {
                fullName: name,
                instagram: ig,
                email: email
            });

            // 5. Mengosongkan form kembali
            reviewForm.reset();
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