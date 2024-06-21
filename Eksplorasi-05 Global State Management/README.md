# Rangkuman Materi Global State Management

**1. Apa itu Global State Management**

Global State Management merupakan teknik untuk memusatkan dan menangani data yang perlu diakses oleh banyak komponen di seluruh aplikasi Anda. Data ini dikumpulkan di satu tempat, sehingga lebih mudah dilacak dan diperbarui. Ada beberapa cara untuk menerapkan manajemen state global dalam aplikasi. Seiring dengan kompleksitas aplikasi React yang semakin meningkat, mengelola state secara lokal pada setiap komponen menjadi tidak efisien dan sulit dipelihara. Global State Management membantu mengatasi hal ini dengan menyediakan solusi yang terpusat dan terstruktur untuk mengelola data aplikasi.

Pilihan Populer untuk Global State Management:

- Redux: Pustaka populer yang menyediakan arsitektur state management unidirectional dengan konsep store, actions, dan reducers.
- MobX: Pustaka state management yang menggunakan konsep reactive data sehingga perubahan state secara otomatis akan diperbarui pada komponen yang bergantung.
- Context API: Fitur bawaan React yang memungkinkan untuk menyediakan state global dan membuatnya mudah diakses oleh komponen turunan.
- Recoil: Pustaka state management modern yang menggabungkan beberapa keunggulan Redux dan MobX, dengan fokus pada kemudahan penggunaan dan performa.

**2. Manfaat Global State Management**

- Mempermudah akses data: Komponen aplikasi dapat mengakses data global dengan mudah tanpa harus dipropel antar komponen.
- Meningkatkan konsistensi data: Memastikan data aplikasi tetap konsisten di seluruh bagian aplikasi.
- Memudahkan debugging: Mempermudah proses debugging karena state aplikasi terpusat dan terstruktur.
- Meningkatkan skalabilitas: Memudahkan pengembangan aplikasi yang lebih besar dan kompleks

**3. Redux & Redux Thunk**

Redux adalah library powerful untuk mengelola state global dalam aplikasi React. Dengan menggunakan Redux, kita dapat membangun aplikasi yang lebih maintainable, predictable, testable, dan scalable. Ada 3 komponen penting di Redux, yaitu:
- Action (Digunakan untuk memberikan informasi dari aplikasi ke store)
- Reducer (Pure Javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru)
- Store (Objek Sentral yang menyimpan state pada aplikasi)


Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Redux Thunk diperlukan untuk menghabdle side effect logic yang kompleks dan untuk logic async seperti request data. 

