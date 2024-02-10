import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <img
      src="https://res.cloudinary.com/manimar/image/upload/v1707472582/image_3_mbietn.jpg"
      alt="home-img"
      className="home-image"
    />
    <h1 className="home-heading">Vadde Maruthi</h1>
    <h2 className="h2">Front End Developer</h2>
    <p className="home-par">
      Highly motivated and skilled Front End Developer with a strong educational
      background in Nxt Wave. Seeking opportunities to utilize my industry-ready
      certification in Front End Development and contribute to the success of a
      dynamic organization
    </p>
    <Link to="/sidebar">
      <button type="button" className="home-button">
        Find More
      </button>
    </Link>
  </div>
)

export default Home
