import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-cyan-700 text-white fixed">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-2xl font-bold">Moments</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
        </div>
    </div>
  )
}
