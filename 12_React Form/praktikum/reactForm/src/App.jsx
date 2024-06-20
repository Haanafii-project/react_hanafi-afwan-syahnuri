import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage"
import SignIn from "./pages/SignIN";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateProductPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>
  )
  }

export default App
