import './App.css';
// import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import SideBar from './components/SideBar';
import Home from './pages/index'
import SignInPage from './pages/signin'
import LowerBody from './pages/lower';
import UpperBody from './pages/upper';
import Diet from './pages/diet';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Effective Home Workouts</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="Effective Home Workouts, for the upper body, lower body with workout diet plans" />
    </Helmet>
    <Router>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/signin' component={SignInPage} exact/>
      <Route path='/lowerbody' component={LowerBody} exact/>
      <Route path='/upperbody' component={UpperBody} exact/>
      <Route path='/dietmeal' component={Diet} exact/>
    </Switch>
    </Router> 
     </>
  );
}

export default App;
