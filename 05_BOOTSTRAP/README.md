# Rangkuman Materi Bootstrap

**Apa itu Bootstrap**

Bootstrap merupakan framework CSS open-source yang digunakan untuk membangun tampilan dari website. Bootstrap memanfaatkan HTML, CSS, dan JavaScript untuk membuat tampilan situs web yang konsisten dan menarik di berbagai perangkat dan browser.Bootstrap menyediakan seperangkat alat dan gaya yang telah dirancang sebelumnya untuk mempercepat proses pengembangan web. Ini mencakup berbagai komponen UI (antar muka pengguna) yang dapat digunakan kembali, seperti tombol, formulir, navigasi, dan banyak lagi, serta sistem grid responsif untuk menyusun tata letak halaman web.


**Cara Menginstall Bootstrap**
Ada beberapa cara yang umum digunakan untuk menginstal Bootstrap, tergantung pada kebutuhan dan preferensi developer. Berikut beberapa di antaranya:
1. **Menggunakan CDN (Content Delivery Network):**
Ini adalah cara termudah untuk memulai dengan Bootstrap. Anda dapat menyertakan tautan ke file Bootstrap langsung dari server CDN Bootstrap dalam kode HTML Anda. Contohnya:
- CSS
`<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">`
- Javascript
`<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>`

2. **Mengunduh dari situs resmi Bootstrap:**
Kita dapat mengunduh versi terbaru Bootstrap dari situs web resminya di https://getbootstrap.com/. Setelah mengunduh, kita bisa menyertakan file-file Bootstrap (CSS dan JavaScript) secara lokal dalam proyek Anda.


**Class Pada Bootstrap**

Di Bootstrap, "class" merupakan atribut HTML yang digunakan untuk menerapkan gaya dan fungsionalitas tertentu pada elemen-elemen HTML. Ketika menambahkan class tertentu ke elemen HTML, hal tersebut memberikan instruksi kepada browser untuk menerapkan gaya dan perilaku yang sudah ditentukan oleh Bootstrap untuk class tersebut. Beberapa contoh Class yang ada pada Bootstrap: 

| Class Bootstrap | Deskripsi |
| :---: | ------------- |
| `container`  | Mengelompokkan konten ke dalam wadah dengan lebar yang ditetapkan dan berada di tengah halaman. |
| `row` | Membuat baris untuk menempatkan kolom. Setiap baris dapat memiliki sejumlah kolom yang diatur dalam sistem grid Bootstrap. |
| `col-*` | Menetapkan kolom dengan ukuran tertentu pada sistem grid Bootstrap. * diganti dengan nomor yang menunjukkan jumlah kolom yang ingin Anda alokasikan. Contoh: col-6 untuk kolom setengah lebar. |
| `btn` | Mengubah sebuah elemen menjadi tombol. |



# Rangkuman Materi Tailwind CSS

**Apa itu Tailwind CSS**

 Tailwind CSS adalah sebuah framework CSS yang dirancang untuk memudahkan developer web dengan memberikan kumpulan kelas-kelas yang bisa langsung digunakan untuk membuat desain website. Tailwind CSS menggunakan Utility Class yang dirancang untuk melaukan tugas tugas spesifik, seperti mengatur margin, padding, warna teks, ukuran font, dan lain sebagainya. Sebagai contoh, untuk memberikan latar belakang merah pada sebuah elemen kita bisa menggunakan kelas `bg-red-500`, atau kelas `text-xl` untuk membuat ukuran teks menjadi besar. Dengan menggunakan utility class ini, kita bisa membuat desain web dengan cepat dan mudah tanpa perlu menulis CSS khusus untuk setiap elemen.

**Cara Menginstall Tailwind CSS**

Ada beberapa cara yang umum digunakan untuk menginstal Tailwind CSS, tergantung pada kebutuhan dan preferensi developer. Berikut beberapa di antaranya:
1. Tailwind CLI.
Cara termudah dan tercepat untuk memulai dan menjalankan Tailwind CSS dari awal adalah dengan alat Tailwind CLI. CLI juga tersedia sebagai executable mandiri jika Anda ingin menggunakannya tanpa menginstal Node.js.
2. PostCSS. 
Menginstal Tailwind CSS sebagai plugin PostCSS adalah cara paling mulus untuk mengintegrasikannya dengan alat build seperti webpack, Rollup, Vite, dan Parcel.
3. Play CDN. 
Gunakan Play CDN untuk mencoba Tailwind langsung di browser tanpa langkah pembuatan apa pun. Play CDN dirancang untuk tujuan pengembangan saja, dan bukan pilihan terbaik untuk produksi.

itulah beberapa cara untuk menginstall Tailwind CSS. Untuk lebih lengkapnya bisa mengunjungi https://tailwindcss.com


**Tailwind CSS Pseudoclass**

Tailwind CSS menyediakan utility classes untuk beberapa pseudo-class CSS seperti `hover`, `focus`, dan `active`. Pseudo-class ini berfungsi untuk menentukan gaya CSS yang berbeda saat pengguna berinteraksi dengan elemen. Misalnya, untuk memberikan efek `hover` pada sebuah tombol, Anda bisa menggunakan pseudo-class hover dengan Tailwind CSS seperti ini:

`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover Saya!
</button>`

Pada contoh di atas, saat pengguna mengarahkan kursor mouse ke tombol tersebut, warna latar belakangnya akan berubah dari biru muda `bg-blue-500` menjadi biru tua `bg-blue-700` karena kita menggunakan class `hover:bg-blue-700`.

