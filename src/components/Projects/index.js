import {Link} from 'react-router-dom'
import './index.css'

const Projects = () => (
  <div className="project-container">
    <Link to="/iplDashboard" className="list-name-m">
      IPL Dashboard
    </Link>
    <a href="https://marmani.ccbp.tech/" className="hi">
      Projects view IPL Dashboard
    </a>
    <Link to="/nxtWatch" className="list-name-m">
      Nxt Watch
    </Link>
    <a href="https://maniwatch.ccbp.tech/" className="hi">
      Projects view Nxt Watch
    </a>
    <Link to="/bookHub" className="list-name-m">
      Book Hub (Goodreads Clone)
    </Link>
    <a href="https://manibook.ccbp.tech/login" className="hi">
      Projects view Book Hub
    </a>
    <div className="pk">
      <h2 className="not">Note :</h2>
      <p className="user">
        Username: <span className="nam">rahul</span>
      </p>
      <p className="user">
        password: <span className="nam">rahul@2021</span>
      </p>
    </div>

    <Link to="/sidebar">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default Projects
