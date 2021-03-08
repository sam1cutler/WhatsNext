import { Link, NavLink } from 'react-router-dom';
import './HeaderRegisteredUser.css';
import TokenService from '../services/token-service';

function HeaderRegisteredUser() {

    function handleLogout() {
        TokenService.clearLocalStorage();
    }
    
    return (
        <header>
            <div className='header-upper'>
                <div className='header-component'>
                    <Link to='/watch-list'>
                        <h1>What's Next?</h1>
                    </Link>
                </div>
                <div className='header-component links-section'>
                    <NavLink 
                        to='/'
                        className='header-link-container'
                        onClick={handleLogout}
                    >
                        <p>Logout</p>
                    </NavLink>
                </div>
            </div>
            <div className='header-lower'>
                <NavLink
                    to='/watched-log'
                    className='nav-button'
                >
                    WATCHED
                </NavLink>
                <NavLink
                    to='/watch-list'
                    className='nav-button'
                >
                    TO-WATCH
                </NavLink>
                <NavLink
                    to='/friends'
                    className='nav-button'
                >
                    FRIENDS
                </NavLink>
            </div>
        </header>
    )

}

export default HeaderRegisteredUser;