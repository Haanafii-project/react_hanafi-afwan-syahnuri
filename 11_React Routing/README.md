# Materi React Routing 

**1. Apa itu Router ?**

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada Single Page Application(SPA).
| Multi Page Application  | Single Page Application |
| --- | --- |
| Setiap halaman dimuat ulang dari server saat navigasi. | Hanya memuat satu halaman awal, kemudian konten diperbarui secara dinamis tanpa memuat ulang seluruh halaman. |
| Kecepatan awal mungkin lebih lambat karena setiap halaman dimuat ulang. | Kecepatan awal lebih cepat setelah halaman awal dimuat, navigasi antar halaman lebih cepat. |
| Lebih mudah dioptimalkan untuk mesin pencari karena setiap halaman memiliki URL unik. | SEO lebih rumit karena URL mungkin tidak selalu mencerminkan konten yang terlihat. |

**2. React Router**

React Router adalah library populer untuk mengelola routing dalam aplikasi React. Library ini menyediakan cara deklaratif dan fleksibel untuk mendefinisikan rute, menangani navigasi, dan mengakses parameter rute. ada beberapa komponen-komponen penting yang biasanya digunakan di React Router yaitu:
- BrowserRouter (digunakan sebagai router yang menggunakan API History dari html 5)
- Route (digunakan sebagai pengarah jalannya lalu lintas pada suatu aplikasi web)
- Switch (digunakan untuk membungkus kumpulan beberapa komponen Route)
- Link (digunakan untuk berpindah antar halaman)

**3. Hook Routing React**
- useHistory (memberi akses ke instance riwayat yang dapat digunakan untuk bernavigasi)
- useParams (mengembalikan objek pasangan kunci/nilai parameter URL)
- useRouteMatch (mencoba mencocokkan URL saat ini dengan cara yang sama seperti `<Route>`)