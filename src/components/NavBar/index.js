import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
  <nav className="navbar">
    <div>
      <h1>Digital Resume</h1>
    </div>
    <Link to="/">
      <img
        className="image-name"
        src="https://res.cloudinary.com/manimar/image/upload/v1707473475/image_22_xekvfa.jpg"
        alt="user-img"
      />
    </Link>
  </nav>
)

export default NavBar
