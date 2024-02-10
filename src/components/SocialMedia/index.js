import {Link} from 'react-router-dom'
import './index.css'

const SocialMedia = () => (
  <div className="so-container">
    <h1 className="so-heading-main">Social Media Links</h1>
    <div>
      <h2 className="so-heading">
        Git Hub <br />{' '}
        <a href="https://github.com/maruthivadde" className="a-aa">
          gitHub
        </a>
      </h2>
    </div>
    <div>
      <h2 className="so-heading">
        Linkedin <br />{' '}
        <a
          href="https://www.linkedin.com/in/vadde-maruthi-696b8723a"
          className="a-aa"
        >
          Linkedin
        </a>
      </h2>
    </div>
    <div>
      <h2 className="so-heading">
        Naukri <br />{' '}
        <a
          href="https://www.naukri.com/mnjuser/profile?id=&altresid"
          className="a-aa"
        >
          Naukri
        </a>
      </h2>
    </div>
    <Link to="/sidebar">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default SocialMedia
