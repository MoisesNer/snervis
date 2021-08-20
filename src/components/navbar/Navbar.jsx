import React, { useState, useEffect } from 'react'
import logosmall from '../../assets/sebastianervis_small.png'
import { Link, useHistory } from 'react-router-dom'
import './navbar.css'
import { Button } from '../buttons/Button';
import { useAuth } from '../../Context'

function Navbar() {
    
    //LOG OUT
    const [error, setError] = useState("")
    // const [setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    
    async function handleLogOut() {
        setError('')
        try {
            await logout()
            history.push('/')
            setClick(false)
        } catch {
            setError('Failed to log out')
            console.log(error);
        }
    }
    
    //BURGUER
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
                        <img src={logosmall} alt="sebi nervis logo" className='navbar-img' />
                    </Link>
                    <div className="navbar-menu" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-hamburger'} />
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
                        <li className='navbar-item'>
                            <Link to='/update-profile' className='navbar-links' onClick={closeMobileMenu}>
                                {(currentUser == null) ?
                                    '' : currentUser.email
                                }
                            </Link>
                        </li>
                        <li>
                            {(currentUser == null) ?
                                <Link to='/login' className='navbar-links-mobile' onClick={closeMobileMenu}>LOG IN</Link>
                                : <Link to='/' className='navbar-links-mobile' onClick={handleLogOut}>LOG OUT</Link>
                            }
                        </li>
                    </ul>

                    {(currentUser == null) ?
                        <Link to='/login'>
                            {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                        </Link>
                        : 
                        <Link to='/'>
                            {button && <Button buttonStyle='btn--outline' onClick={handleLogOut}>LOG OUT</Button>}
                        </Link>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar

