# case-2-ajax
Repositori _case study_ tentang AJAX untuk mata kuliah Pemrograman Web.

### WARNING
Beberapa fitur seperti foto profil dan perekaman ke dalam file txt tidak akan bisa berjalan karena batasan dari GitHub. Seluruh kode harus diunduh untuk mencoba keseluruhan fitur website.

### Alur Penggunaan
1. Pengguna menekan _floating chat widget_ untuk membuka kotak _chat_.
1. Masukkan username pengirim (Anda) dan tujuan. Jika username belum ada dalam database, username akan dibuat. Klik _masuk_ untuk menerapkan pembuatan _username_. Jika username kosong disubmit, maka username acak akan dibuat. Jika username tujuan kosong disubmit, maka chat dilakukan dengan Anda sendiri.
2. Username disimpan dalam database mysql tabel user jika masih belum ada dan disimpan sementara di sessionStorage klien.
3. Chatting. Pesan chat yang dikirim akan disimpan dalam database mysql tabel chat. **Pengiriman pesan dilakukan dengan menekan tombol panah di sebelah kolom pesan.**
4. Penyuntingan username dapat dilakukan dengan menekan tombol edit (pensil) lalu menuliskan username baru di kolom sebelah tombol tersebut.
5. Klik tombol "Enter" pada keyboard untuk mengirimkan permintaan perubahan username dan username baru. Jika username baru belum ada dalam database user, maka username lama diperbarui dengan username baru. Sebaliknya, username tidak akan diubah dan sebuah alert pemberitahuan akan muncul untuk memberitahu bahwa username baru tidak bisa digunakan.

### Alur
index.php -> Controller -> Model (jika perlu) -> View
