# Rangkuman Materi React Form

**1. Basic Form**

 Form adalah wadah yang digunakan untuk membuat formulir elektronik di halaman web. Formulir ini memungkinkan pengguna untuk memasukkan data, seperti teks, angka, pilihan, dan lainnya, yang kemudian dikirim ke server untuk diproses. Beberapa contoh element form: 
 -  `<input>` (biasanya digunakan untuk inputan yang tidak terlalu panjang)
 - `<textarea>` (digunakan untuk inputan yang panjang, seperti deskripsi)
 - `<select>` (digunakan untuk inputan yang pilihannya sudah ditentukan)
 - `Radiobutton` (merupkan salah satu type di elemen `<input>`,digunakan untuk inputan yang hanya bisa memilih 1 pilihan)
 - `Checkbox` (merupkan salah satu type di elemen `<input>`, digunakan untuk inputan yang dapat dipilih lebih dari 1 pilihan)

**2. Uncontrolled vs Controlled component**

Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI. uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.

| Fitur  | Uncontrolled | Controlled |
| --- | :---: | :---: |
| one-time value retrieval (e.g. on submit) | v | v |
| validating on submit | v | v |
| instant field validation | x | v |
| conditionally disabling submit button | x | v |
| enforcing input format | x | v |
| several inputs for one piece of data | x | v |
| dynamic inputs | x | v |


**3. Basic Validation**

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan: 
- Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi 
- Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman
- Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi


Ada 2 tipe validasi data formulir yaitu:
- Client-side Validation (Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server)
- Server-side Validatio (sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan ke database)

