import React from "react"
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <h3>Authors</h3>
      <ul className="gh-links">
        <li><a href="https://github.com/hoomberto" target="_blank"><button>Bobby Vasquez</button></a></li>
        <li><a href="https://github.com/novaraptur" target="_blank"><button>Dean Cook</button></a></li>
        <li><a href="https://github.com/shawnmcmahon" target="_blank"><button>Shawn McMahon</button></a></li>
      </ul>
    </footer>
  )
}

export default Footer