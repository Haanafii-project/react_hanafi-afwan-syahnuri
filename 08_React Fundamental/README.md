# RANGKUMAN MATERI REACT FUNDAMENTAL

1. JSX (Javascript XML)

Di React.js, JSX (JavaScript XML) adalah ekstensi sintaks yang memungkinkan kita untuk menulis struktur mirip HTML di dalam kode JavaScript Anda. JSX menyediakan cara yang lebih mudah dibaca dan dipahami untuk menentukan komponen antarmuka pengguna (UI) yang membentuk aplikasi React. JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI

2. React Component

React Component adalah bagian kode yang dapat digunkan kembali yang digunkan untuk menentukan tampilan, behavior, dan state sebagian UI

3. React Lifecycle

Lifecycle method yang biasa digunakan:
- `render()`. Fungsi yang paling sering dipakai. Required pada class component. Pure Function tidak boleh ada `setState()`
- `componentDidMount()`. Dipanggil ketika component sudah di render untuk pertama kali
- `componentDidUpdate()`. Dipanggil ketika terjadi updaet (props atau state berubah)
- `componentWillUnmount()`. Dipanggil ketika component akan dihancurkan
