# Rangkuman Materi React Hooks

**1. Apa itu React Hooks ?**

React Hooks adalah fitur baru di React 16.8 yang memungkinkan Anda menggunakan state dan other React features dari function component. Hooks adalah fungsi yang memungkinkan kita untuk "mengkaitkan" (hook into) state dan lifecycle React dari function component. Hooks tidak akan membuat class component menjadi function component, dan tidak pula mengubah cara kerja React. Ada banyak jenis React Hooks, tapi beberapa yang paling umum digunakan adalah:

- useState: Digunakan untuk mengelola state di function component.
- useEffect: Digunakan untuk menjalankan side effects, seperti fetching data atau setting up subscriptions.
- useContext: Digunakan untuk mengakses context dari component lain.
- useReducer: Digunakan untuk mengelola state yang lebih kompleks dengan reducer.
- useRef: Digunakan untuk mengakses DOM node atau menyimpan nilai yang tidak perlu di-render ulang.



**2. useState dan useEffect**

| useState  | useEffect |
| --- | --- |
| Digunakan untuk membuat dan mengelola state di function component.  | Digunakan untuk menjalankan side effects, seperti fetching data atau setting up subscriptions.  |
| State adalah objek JavaScript yang dapat diubah seiring waktu.  | Side effects adalah operasi yang tidak terkait langsung dengan rendering UI.  |
| useState mengembalikan array yang terdiri dari dua elemen: nilai state saat ini dan fungsi untuk memperbaruinya.  | useEffect menerima dua argumen: callback function dan array dependensi.  |



**3. Custom Hooks**

Custom hook adalah fungsi yang dibuat untuk mengekstrak logika reusable dari React Hooks. Custom hook dapat digunakan di berbagai component untuk menghindari duplikasi kode.

Contoh pembuatan Custom Hooks:
``` js
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}
```