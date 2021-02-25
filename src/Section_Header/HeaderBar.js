import { Link, NavLink } from 'react-router-dom';
import './HeaderBar.css';

function HeaderBar() {

    return (
        <header>
            <div className='header-component'>
                <Link to='/'>
                    <h1>What's Next?</h1>
                </Link>
            </div>
            <div className='header-component links-section'>
                <NavLink 
                    to='/signup'
                    className='header-link-container'
                >
                    Sign Up
                </NavLink>

                <NavLink 
                    to='/login'
                    className='header-link-container'
                >
                    Login
                </NavLink>

                <Link 
                    to='/watch-list'
                    className='header-link-container'
                >
                    Demo
                </Link>
            </div>
        </header>
    )

}

export default HeaderBar;