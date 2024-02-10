import {Link} from 'react-router-dom'
import './index.css'

const Education = () => (
  <div className="education">
    <h1 className="ed-heading"> Nova's Institute of Technology, Eluru 2021</h1>

    <p className="ed-par">
      B Tech (Bachelor of Technology)_Mechanical Engineering (ME) (60.0%)
    </p>

    <h2 className="ed-heading">
      Sri Sathya Sai Junior Collage , Anantapur 2014
    </h2>
    <p className="ed-par">Intermediate_MPC (60.0%)</p>
    <h3 className="ed-heading"> > Z.P High School , Kambadur(A.P) 2012</h3>

    <p className="ed-par">Secondary School Of Certificate (6.3 CGPA)</p>
    <Link to="/sidebar">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default Education
