import { Link, NavLink } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import './HeaderRegisteredUser.css';
import TokenService from '../services/token-service';

function HeaderRegisteredUser() {

    function handleLogout() {
        TokenService.clearLocalStorage();
    }
    
    return (
        <header>
            <div className='header-upper'>
                <div className='header-title'>
                    <Link to='/watch-list'>
                        <h1>What's Next?</h1>
                    </Link>
                </div>
                <div className='header-links-section'>
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
                    <AiOutlineCheckSquare />
                </NavLink>
                <NavLink
                    to='/watch-list'
                    className='nav-button'
                >
                    <FiArrowRightCircle />
                </NavLink>
                <NavLink
                    to='/friends'
                    className='nav-button'
                >
                    <FaUserFriends />
                </NavLink>
            </div>
        </header>
    )

}

export default HeaderRegisteredUser;