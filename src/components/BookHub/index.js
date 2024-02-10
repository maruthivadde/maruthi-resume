import {Link} from 'react-router-dom'
import './index.css'

const BookHub = () => (
  <div className="container-a">
    <h1>Book Hub</h1>
    <h2>
      Technologies used :{' '}
      <span className="span">
        {' '}
        React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local
        Storage, JWT Token, Authorization, Authentication, React Rating Stars,
        React Select, Figma, client storage. Designed a comprehensive book
        management platform, inspired by Goodreads.
      </span>
    </h2>
    <li>
      Implemented advanced features such as login, home, bookshelves, search,
      and rating with React Router, React Rating Stars, React Select, and fetch
      APIs.
    </li>
    <li>
      Enhanced the user experience with a visually appealing UI, designed with
      Figma and Bootstrap, and secured access with client storage
      authentication.
    </li>

    <Link to="/projects">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default BookHub
