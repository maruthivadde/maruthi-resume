import {Link} from 'react-router-dom'
import './index.css'

const SideBar = () => (
  <div className="side-bar-container">
    <Link to="/education" className="list-name">
      Education
    </Link>
    <Link to="/skills" className="list-name">
      Skills
    </Link>
    <Link to="/projects" className="list-name">
      Projects
    </Link>
    <Link to="/certificates" className="list-name">
      Certificates
    </Link>
    <Link to="/socialMedia" className="list-name">
      social Media
    </Link>
    <Link to="/viewMore" className="list-name">
      View More
    </Link>
    <Link to="/">
      <button type="button" className="button-b">
        Back
      </button>
    </Link>
  </div>
)

export default SideBar
