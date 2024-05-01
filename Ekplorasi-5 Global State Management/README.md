# Rangkuman Materi Global State Management

**1. Apa itu Global State Management**

Global State Management merupakan teknik untuk memusatkan dan menangani data yang perlu diakses oleh banyak komponen di seluruh aplikasi Anda. Data ini dikumpulkan di satu tempat, sehingga lebih mudah dilacak dan diperbarui. Ada beberapa cara untuk menerapkan manajemen state global dalam aplikasi. Berikut beberapa pendekatan umum:

- Context API (React): Fitur bawaan React ini memungkinkan Anda membuat penyedia state global yang dapat diakses oleh komponen mana pun dalam sub-tree.
- Redux: Library javascript yang populer yang menggunakan aliran data searah untuk pembaruan state yang dapat diprediksi.

**2. Redux**

Redux adalah library powerful untuk mengelola state global dalam aplikasi React. Dengan menggunakan Redux, kita dapat membangun aplikasi yang lebih maintainable, predictable, testable, dan scalable. Ada 3 komponen penting di Redux, yaitu:
- Action (Digunakan untuk memberikan informasi dari aplikasi ke store)
- Reducer (Pure Javascript function yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru)
- Store (Objek Sentral yang menyimpan state pada aplikasi)

**3. Redux Thunk**

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Redux Thunk diperlukan untuk menghabdle side effect logic yang kompleks dan untuk logic async seperti request data. 

