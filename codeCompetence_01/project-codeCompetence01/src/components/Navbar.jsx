import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-cyan-700 text-white">
        <div className="flex-1">
            <a className="btn btn-ghost text-2xl font-semibold">Moments</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
    </div>
  )
}
