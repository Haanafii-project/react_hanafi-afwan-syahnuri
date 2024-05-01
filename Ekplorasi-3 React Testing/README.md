# Rangkuman Materi React Testing

**1. Apa itu Testing ?**
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita teatap benar sepanjang masa aplikasi. Test assertion ini adlah ekspresi boolean yang mebngmbalikan nilai true kecuali ada bug di kode kita. Testing bermanfaat untuk mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug. Secara Umum, kategori Testing di React terbagi menjadi dua kategori:
- Rendering component trees didalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
- Menjalankan aplikasi lengkap di dalam environment browser asli (ini dikenal sebagai tes "end-to-end").

Tools untuk React Testing:
- Jest (Test runner pada JavaScript yang memungkinkan kita mengakses DOM melalui jsdom)
- React Testing Library (Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya)

**2. Create basic testing with RTL**

Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.
Π

React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya ialah `getByText` untuk memilih teks dari elemen yang sudah dipilih.

**3. Testing Custom Hook**

React Hooks Testing Library adalah library untuk menguji custom hook React dengan mudah dan efisien. Library ini menyediakan beberapa utilitas untuk membantu Anda dalam:

- Merender custom hook: Anda dapat menggunakan fungsi renderHook untuk merender custom hook dan mendapatkan nilai kembaliannya.
- Memperbarui input hook: Anda dapat menggunakan fungsi act untuk memperbarui input hook dan memicu re-render.
- Memverifikasi output hook: Anda dapat menggunakan assertion library seperti jest atau expect untuk memverifikasi output hook sesuai dengan yang diharapkan.