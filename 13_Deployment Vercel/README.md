# Rangkuman Materi Deployment

**1. Build React App**

Kenapa Perlu Build? Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.


**2. Vercel App**
Vercel adalah platform cloud yang berfokus pada Frontend Cloud.  Vercel menyediakan infrastruktur dan developer experience untuk membangun, deploy, dan mengamankan web experience modern.  Dengan Vercel, kita dapat  membangun aplikasi web yang lebih cepat, lebih personal, dan lebih skalabel. 

Berikut beberapa hal yang dapat dilakukan dengan Vercel:

- **Deploy static dan serverless application**: Vercel cocok untuk deploy berbagai macam web application, mulai dari static site yang sederhana sampai aplikasi kompleks dengan serverless function.
- **Deployment Otomatis**: Vercel dapat secara otomatis melakukan deploy aplikasi Anda setiap kali Anda melakukan push perubahan kode ke repository Git.
- **Global CDN**: Vercel menggunakan jaringan Content Delivery Network (CDN) global untuk memastikan pengiriman konten website Anda dengan cepat ke seluruh dunia.
- **Integrasi dengan framework populer**: Vercel memiliki integrasi yang baik dengan framework frontend popular seperti React, Next.js, Nuxt.js, Gatsby, dan Angular.
- **Security terintegrasi**: Vercel menyediakan fitur keamanan terintegrasi seperti HTTPS otomatis dan sertifikat SSL untuk melindungi aplikasi Anda.
- **Enviroment**: Vercel menyediakan fitur environment untuk mengatur konfigurasi yang berbeda untuk development, staging, dan production.
Preview Deployments: Vercel memungkinkan Anda membuat preview deployment untuk menguji perubahan kode sebelum dipublikasikan.

**3. Deploy to Vercel**
Berikut adalah langkah-langkah untuk deployment aplikasi menggunakan Vercel:

**Persiapan**:

- Pastikan Anda memiliki akun Vercel. Anda dapat membuat akun gratis di https://vercel.com/.
- Siapkan repository Git untuk aplikasi Anda. Aplikasi Anda harus tersimpan di repository Git seperti GitHub, GitLab, atau Bitbucket.
- Pastikan aplikasi Anda terkonfigurasi untuk deployment. Ikuti instruksi konfigurasi untuk framework atau library yang Anda gunakan.

**Deployment**:

- Hubungkan repository Git Anda ke Vercel. Anda dapat menghubungkan repository Anda di halaman Projects di Vercel.
- Pilih repository yang ingin Anda deploy. Vercel akan mendeteksi aplikasi Anda dan menampilkan konfigurasi deployment default.
- Sesuaikan konfigurasi deployment (opsional). Anda dapat mengatur konfigurasi seperti nama project, environment variables, dan build commands.
- Klik tombol Deploy. Vercel akan memulai proses deployment aplikasi Anda.

**Verifikasi**:

- Setelah deployment selesai, Anda akan melihat URL aplikasi Anda di dashboard Vercel.
- Buka URL aplikasi Anda di browser untuk memverifikasinya.