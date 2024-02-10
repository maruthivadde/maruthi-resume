import {Link} from 'react-router-dom'

import './index.css'

const Certificates = () => (
  <div className="c-container">
    <h1 className="c-heading">My Certificates</h1>
    <div>
      <h2 className="c-h1">
        HTML And CSS Certification
        <br />{' '}
        <a href="https://certificates.ccbp.in/intensive/static-website?id=BNDPGJMHML">
          click
        </a>
      </h2>
    </div>
    <div>
      <h2 className="c-h1">
        Bootstrap And FLEXBOX Certification
        <br />{' '}
        <a href="https://certificates.ccbp.in/intensive/responsive-website?id=OWUXSBSZVA">
          click
        </a>
      </h2>
    </div>
    <div>
      <h2 className="c-h1">
        JavaScript Certification
        <br />{' '}
        <a href="https://certificates.ccbp.in/intensive/dynamic-web-application?id=VSQVVVREZP">
          click
        </a>
      </h2>
    </div>
    <div>
      <div>
        <h2 className="c-h1">
          JavaScript Essentials Certification
          <br />{' '}
          <a href="https://certificates.ccbp.in/intensive/javascript-essentials?id=VDEGUINWRO">
            click
          </a>
        </h2>
      </div>
      <div>
        <h2 className="c-h1">
          React Js Certification
          <br />{' '}
          <a href="https://certificates.ccbp.in/intensive/react-js?id=WUIVDSHZGY">
            click
          </a>
        </h2>
      </div>
      <div>
        <h2 className="c-h1">
          Python Certification
          <br />{' '}
          <a href="https://certificates.ccbp.in/intensive/programming-foundations?id=GJKKECGYBK">
            click
          </a>
        </h2>
      </div>
      <div>
        <h2 className="c-h1">
          MySql Certification
          <br />{' '}
          <a href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=XCHPVVYQRA">
            click
          </a>
        </h2>
      </div>
      <div>
        <h2 className="c-h1">
          Git Certification
          <br />{' '}
          <a href="https://certificates.ccbp.in/intensive/developer-foundations?id=BQEZJGNRVS">
            click
          </a>
        </h2>
      </div>
      <Link to="/sidebar">
        <button type="button" className="button">
          Back
        </button>
      </Link>
    </div>
  </div>
)

export default Certificates
