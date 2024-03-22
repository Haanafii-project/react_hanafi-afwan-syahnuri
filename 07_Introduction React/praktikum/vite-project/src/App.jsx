import NavBar from './components/NavBar';

function heroSection() {
  return <div>Hero Section</div>;
}

function app() {
  let bahasa = "indonesia";
  const namaAnakKelas = ["fajri", "hanafi", "krisna", "ardiansyah"];
  const tampil = () => {

  }

  return (
    <div>
      <h1>Ini adalah halaman app</h1>
      <NavBar name="john"/>

      <ul> 
        {namaAnakKelas.map(nama => ( 
          <h3>{nama.name}</h3> 
        ))} 
      </ul> 

      <button onClick={tampil}>
        {bahasa =="indonesia" ? "tombol" : "button"}
      </button>
    </div>
  )
}

export default app



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
