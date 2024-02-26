# RANGKUMAN MATERI CSS

**1. Definisi CSS**

CSS adalah bahasa yang kita gunakan untuk membuat style pada code HTML. CSS dapat menghias halaman web seperti `color`, `size`, `font`, `background`, `width`, `height`, dan sebagainya. CSS juga dapat mengatur posisi pada halaman web seperti `float`, `align`, `display`, `position`, dan sebagainya. ada 3 cara menambahkan file CSS ke dalam HTML yaitu External CSS (file CSS berada dalam file terpisah yang disimpan dengan ekstensi `.css`, file CSS ini kemudian dihubungkan ke dokumen HTML menggunakan tag `<link>` di dalam bagian `<head>` dari dokumen HTML.), Internal CSS (CSS didefinisikan di dalam tag `<style>` yang terletak di dalam bagian `<head>` dari dokumen HTML yang sama), dan Inline CSS (CSS diterapkan secara langsung ke elemen HTML menggunakan atribut style).

**2. Syntax CSS**
- CSS Selector.
Dalam CSS, Selector merupakan pola yang digunakan untuk memilih elemen HTML yang ingin di styling. Untuk memilih elemen HTML yang ingin di styling kita dapat menggunakan tag `id` dan `class`. contoh `h1 {color: pink; font-size: 15px}`
	- `h1` = Selector
	- `{color: pink; font-size: 15px}` = Declaration
	-`color` dan `font-size` = Property
	- `pink` dan `15px` = Value

- CSS Grouping.
Sesuai namanya, beberapa selector dapat dikelompokkan dalam satu deklarasi style

- CSS fonts Properties.
Ada beberapa properties untuk membuat styling pada font contohnya `font`, `font-family`, `font-size`, `font-weight`, `font-style`, dan sebagainya.

- CSS Margin dan Padding.
Keduanya Digunakan untuk Mengatur jarak di Sekitar Elemen HTML. Perbedaannya, Margin digunakan untuk mengatur jarak di luar batas elemen sedangkan Padding digunakan mengatur jarak di dalam batas elemen.

- CSS Display. Digunakan untuk menentukan tampilan pada elemen contohnya seperti `block`,  `inline-block,` dan `none`

**3.  Framework CSS**

Framework CSS adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website. Dengan framework CSS, seperti Bootstrap, Tailwind CSS,  Semantic UI, dan sebagainya, pengembang web dapat menggunakan kode-kode yang sudah jadi untuk membuat tombol, formulir, navigasi, dan bagian-bagian lain dari situs web tanpa perlu menulis kode CSS dari awal. Ini memungkinkan developer untuk fokus pada fungsi dan tata letak situs web mereka tanpa harus khawatir tentang detail-desain CSS yang rumit.