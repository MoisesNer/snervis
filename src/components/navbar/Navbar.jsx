import React, {useState, useEffect} from 'react'
import logosmall from '../../assets/sebastianervis_small.png'
import { Link } from 'react-router-dom'
import './navbar.css'
import { Button } from '../buttons/Button';

function Navbar() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (

        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={logosmall} alt="sebi nervis logo" className='navbar-img'/>
                    </Link>
                    <div className="navbar-menu" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-hamburger'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='navbar-item'>
                            <Link to='/' className='navbar-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/biography' className='navbar-links' onClick={closeMobileMenu}>Biography</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/gallery' className='navbar-links' onClick={closeMobileMenu}>Gallery</Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='navbar-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

