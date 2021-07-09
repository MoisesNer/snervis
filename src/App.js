import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Signup from './components/Pages/Signup';
import Gallery from './components/Pages/Gallery';
import Biography from './components/Pages/Biography'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/biography' component={Biography}/>
          <Route path='/sign-up' component={Signup}/>
          <Route path='/gallery' component={Gallery}/>
        </Switch>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
