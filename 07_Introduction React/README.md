# Rangkuman Materi Introduction React

React adalah library JavaScript yang populer untuk membangun antarmuka pengguna (UI) web interaktif.

1. Arsitektur Berbasis Komponen:
- Aplikasi React dibangun menggunakan komponen yang dapat digunakan kembali, yang merangkum logika UI dan state.
- Komponen dapat berupa fungsi sederhana atau class yang mengembalikan JSX (JavaScript XML) untuk mendeskripsikan UI.
- Komposisi komponen memungkinkan pembuatan UI kompleks dari unit yang lebih kecil dan mudah dikelola.

2. Gaya Deklaratif:
- Anda mendeklarasikan seperti apa seharusnya UI terlihat pada state tertentu, bukan bagaimana memanipulasinya secara langsung.
- React secara efisien memperbarui DOM ketika state dari suatu komponen berubah.
- Ini mendorong pendekatan pengembangan UI yang lebih mudah diprediksi dan dipelihara.

3. Virtual DOM:
- React memelihara representasi UI dalam memori yang disebut Virtual DOM.
- Ketika state atau props dari suatu komponen berubah, React membandingkan Virtual DOM dengan DOM aktual dan menentukan set minimal perubahan yang diperlukan untuk DOM nyata.
- Manipulasi virtual ini secara signifikan meningkatkan performa dibandingkan dengan manipulasi DOM secara langsung.