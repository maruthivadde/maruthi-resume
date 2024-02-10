import {Link} from 'react-router-dom'
import './index.css'

const ViewMore = () => (
  <div className="view-container">
    <img
      src="https://res.cloudinary.com/manimar/image/upload/v1707541685/vi_n41f1a.jpg"
      alt="view"
      className="vi-img"
    />
    <h1>Vadde Maruthi</h1>
    <h2 className="kk">Anantapur, Andhra Pradesh, 515001</h2>
    <h2>9701438716</h2>
    <h2>vadde.maruthi123@gmail.com</h2>
    <Link to="/">
      <button type="button" className="button-bb">
        Back to Home
      </button>
    </Link>
  </div>
)

export default ViewMore
