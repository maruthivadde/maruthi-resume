import {Link} from 'react-router-dom'
import './index.css'

const NxtWatch = () => (
  <div className="container">
    <h1>Nxt Watch</h1>
    <h2>
      Technologies used :{' '}
      <span className="span">
        {' '}
        React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local
        Storage, JWT Token, Authorization, Authentication. Developed the Nxt
        Watch platform, a YouTube-inspired application where users can access
        various video categories, such as Trending, Gaming, and Saved videos,and
        search for specific content while customising the visual theme.
      </span>
    </h2>
    <li>
      Crafted a responsive UI with React components for pages like Login, Home,
      Trending, Gaming, and Saved videos, utilising event handlers and form
      inputs.
    </li>
    <li>
      Established user authentication through username/password input and HTTP
      API calls, maintaining login state with JWT tokens and local storage.
    </li>
    <li>
      Enabled secure navigation using React Router components for protected
      routes, redirecting unauthenticated users to the login page.
    </li>

    <Link to="/projects">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default NxtWatch
