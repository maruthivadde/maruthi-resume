import {Link} from 'react-router-dom'
import './index.css'

const IPLDashboard = () => (
  <div className="ipl-container">
    <h1>IPL Dashboard</h1>
    <h2>
      Technologies used :{' '}
      <span className="span">
        {' '}
        React JS, Routing, REST API Calls, CSS, Bootstrap Implemented IPL
        Dashboard app where users can list of ipl team, individual team details
        and respective team matches info
      </span>
    </h2>
    <li>
      Implemented UI such as home dashboard, individual team info routes by
      using React Router library components like Route, Switch, Link, props,
      lists & keys.
    </li>
    <li>
      Fetched teams list from server asynchronously using fetch GET HTTP API
      call & individual team details, matches info by sending team id as path
      parameter.
    </li>
    <li>
      Implemented 404 not found page for invalid paths by keeping 404 Route as
      last route in the Switch component with * path.
    </li>
    <Link to="/projects">
      <button type="button" className="button">
        Back
      </button>
    </Link>
  </div>
)

export default IPLDashboard
