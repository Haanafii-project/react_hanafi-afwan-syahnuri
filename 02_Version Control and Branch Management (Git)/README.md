# Rangkuman Materi Version Control and Branch Management

**APA ITU VERSION CONTROL**

Version Control merupakan sebuah sistem yang digunakan untuk mengatur versi dari source code program. GIT merupakan salah satu Version Control System populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Git Repository digunakan untuk menyimpan Folders dan File dari project yang dikerjakan dan setiap perubahannya akan tercatat di history yang ada. GitHub adalah platform pengembangan perangkat lunak yang berbasis web yang menggunakan sistem kontrol versi Git. Ini berfungsi sebagai repositori untuk proyek-proyek perangkat lunak, memungkinkan developer untuk berkolaborasi dalam pengembangan perangkat lunak dengan cara yang terstruktur.




**INSTALL/SETTING UP GITHUB**

1. Install Git.
Unduh instaler Git dari situs resmi Git di https://git-scm.com/download/win. Pilih versi yang sesuai dengan arsitektur sistem operasi Windows Anda (32-bit atau 64-bit). Kemudian, jalankan file instaler yang telah diunduh.
2. Konfigurasi Git.
Setelah instalasi selesai, buka terminal atau command prompt (cmd) dan atur nama pengguna dan alamat email Anda menggunakan perintah berikut:
`git config --global user.name "Nama Anda"`
`git config --global user.email "email@anda.com"`
3. Verifikasi Instalasi.
Untuk memastikan bahwa Git telah terinstal dengan benar, Anda dapat memeriksa versi Git yang telah terinstal dengan menjalankan perintah:
`git --version`




**LANGKAH DASAR MENGGUNAKAN Github**

1. Membuat Akun GitHub:
Buat akun GitHub di situs web resmi GitHub (https://github.com) jika Anda belum memiliki satu.
2. Buat Repositori:
Setelah login, Anda dapat membuat repositori baru dengan mengklik tombol "New" di sudut kanan atas halaman GitHub. Berikan nama repositori, deskripsi opsional, dan pilih pengaturan lainnya seperti privasi dan lisensi.
4. Tambahkan atau Edit Berkas:
Buat atau edit berkas di dalam repositori Anda menggunakan editor teks favorit Anda.
5. Menambahkan Perubahan:
Setelah Anda melakukan perubahan pada berkas, tambahkan perubahan tersebut ke daftar perubahan yang akan disimpan (staging area) dengan perintah git add <nama berkas>.
6. Commit Perubahan:
Setelah Anda menambahkan perubahan, buatlah commit untuk menyimpan perubahan tersebut secara permanen dengan perintah `git commit -m "pesan commit"`.
7. Push Perubahan:
Untuk mengirim perubahan yang sudah di-commit ke repositori GitHub, gunakan perintah `git push origin <nama branch>`.
8. Pull Perubahan:
Jika ada perubahan pada repositori yang Anda tidak punya di komputer lokal, Anda dapat menarik (pull) perubahan tersebut ke komputer lokal dengan perintah `git pull origin <nama branch>`.
9. Buat Issue dan Pull Request:
Jika Anda ingin memberikan masukan, melaporkan masalah, atau berkontribusi pada proyek open source, Anda dapat membuat issue atau pull request di repositori yang bersangkutan di GitHub.




**Github Desktop**

Untuk Penggunaan Github Desktop itu hampir sama dengan Github Website namun yang membedakan hanya cara kerja antarmukanya yaitu Github Desktop menggunakan GUI (Graphical User Interface) sedangkan Github Website menggunakan CLI (Command Line Interface).