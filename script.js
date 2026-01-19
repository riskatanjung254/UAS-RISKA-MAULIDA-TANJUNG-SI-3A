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
            // 1. Mencegah halaman agar tidak refresh saat tombol diklik
            event.preventDefault();

            // 2. Mengambil semua data dari inputan
            const data = {
                nama: document.getElementById('nama').value,
                email: document.getElementById('email').value,
                ig: document.getElementById('ig').value,
                tanggal: document.getElementById('tanggal').value,
                pesan: document.getElementById('pesan').value
            };

            // 3. Logika Sederhana (Contoh: Menampilkan pesan sukses)
            console.log("Data Review Diterima:", data); // Melihat hasil di inspect element console
            
            alert("Terima kasih " + data.nama + "!\nReview kamu untuk CORTIS telah berhasil dikirim.");

            // 4. Mengosongkan kembali form setelah dikirim
            reviewForm.reset();
        });
    } else {
        console.error("Error: ID 'reviewForm' tidak ditemukan di HTML.");
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