# case-2-ajax
Repositori _case study_ tentang AJAX untuk mata kuliah Pemrograman Web.

### WARNING
Beberapa fitur seperti foto profil dan perekaman ke dalam file txt tidak akan bisa berjalan karena batasan dari GitHub. Seluruh kode harus diunduh untuk mencoba keseluruhan fitur website.

### Alur Penggunaan
1. Pengguna menekan _floating chat widget_ untuk membuka kotak _chat_.
1. Buat username. Jika tidak membuat, username acak akan dibuatkan. Klik _masuk_ untuk membuat menerapkan pembuatan _username_.
2. Username disimpan dalam users.txt jika masih belum ada dan disimpan sementara di sessionStorage.
3. Chatting. Pesan chat yang dikirim akan terekam dalam chat.txt. **Tombol panah harus ditekan agar pesan dapat terkirim.**
4. Penyuntingan foto profil dan username dapat dilakukan di halaman _user profile_ yang dapat diakses melalui _kebab_.
5. Klik tombol _save_ untuk menyimpan dan menerapkan hasil penyuntingan.
6. Jika tidak ada foto profil yang diberikan dan tombol _save_ diklik, foto profil menjadi kosong/pecah.
7. Username baru disimpan dalam users.txt jika belum ada dan menggantikan nilai username di sessionStorage.

### Alur HTML
index -> iframe(username -> chatbox -> settings)
