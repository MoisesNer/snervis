import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Signup from './components/Pages/Signup';
import Gallery from './components/Pages/Gallery';
import Biography from './components/Pages/Biography'
import Footer from './components/footer/Footer';
import Login from './components/Pages/Login'
import ForgotPassword from './components/Pages/ForgotPassword';
import UpdateProfile from '../src/components/Pages/UpdateProfile';
import { AuthProvider } from './Context';

function App() {
  return (
    
    <AuthProvider>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/biography' exact component={Biography}/>
          <Route path='/sign-up' exact component={Signup}/>
          <Route path='/gallery' exact component={Gallery}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/forgot-password' exact component={ForgotPassword}/>
          <Route path='/update-profile' exact component={UpdateProfile}/>
        </Switch>
        <Footer/>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
