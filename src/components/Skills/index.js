import {Link} from 'react-router-dom'
import './index.css'

const Skills = () => (
  <div className="skills-container">
    <h1>Frontend</h1>
    <li className="list-sk">HTML</li>
    <li className="list-sk">CSS</li>
    <li className="list-sk">Bootstrap</li>
    <li className="list-sk">JavaScript</li>
    <li className="list-sk">React.js</li>
    <li className="list-sk">Anguler.js</li>
    <h2>Backend</h2>
    <li className="list-sk">Python</li>
    <h3>Data base</h3>
    <li className="list-sk"> SǪLite</li>
    <h4>Languages</h4>
    <li className="list-sk">English</li>
    <li className="list-sk">Hindi</li>
    <li className="list-sk">Telugu</li>
    <h4>Strengths</h4>
    <li className="list-sk">Self Confidence</li>
    <li className="list-sk">Self Motivated</li>
    <li className="list-sk">Team Work</li>
    <li className="list-sk">Positive Thinker</li>

    <Link to="/sidebar">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default Skills
