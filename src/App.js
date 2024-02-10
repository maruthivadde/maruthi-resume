import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SideBar from './components/SideBar'

import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import IPLDashboard from './components/IPLDashboard'
import NxtWatch from './components/NxtWatch'
import BookHub from './components/BookHub'
import Certificates from './components/Certificates'
import SocialMedia from './components/SocialMedia'
import ViewMore from './components/ViewMore'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sidebar" component={SideBar} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/IPLDashboard" component={IPLDashboard} />
        <Route exact path="/nxtWatch" component={NxtWatch} />
        <Route exact path="/bookHub" component={BookHub} />
        <Route exact path="/certificates" component={Certificates} />
        <Route exact path="/socialMedia" component={SocialMedia} />
        <Route exact path="/viewMore" component={ViewMore} />
      
      </Switch>
    </>
  )
}

export default App
