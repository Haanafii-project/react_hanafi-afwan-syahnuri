# Rangkuman Materi React Event Handling

1. Apa itu Event Handling

Dalam React, event handling adalah proses menangani interaksi pengguna dengan elemen-elemen di dalam komponen yang akan dibuat. Interaksi ini bisa berupa klik tombol, submit form, perubahan input, dan lain sebagainya.

2. Mengaitkan Event dengan Fungsi

Untuk menangani event, kita perlu mengaitkan event tersebut dengan sebuah fungsi handler. Ini dilakukan dengan menggunakan properti `onClick`, `onSubmit`, `onChange`, dan lainnya tergantung jenis event yang ingin ditangkap.

3. Mencegah Default Behavior `(event.preventDefault())`

Dalam beberapa kasus, kita mungkin ingin mencegah perilaku default dari event tersebut. Misalnya, ketika menekan tombol submit form, form tersebut secara default akan di-submit ke server. kita bisa menggunakan `event.preventDefault()` untuk mencegah hal ini terjadi.