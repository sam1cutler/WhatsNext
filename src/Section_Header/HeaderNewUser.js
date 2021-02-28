import { Link, NavLink } from 'react-router-dom';
import './HeaderNewUser.css';

function HeaderNewUser() {
    
    return (
        <header>
            <div className='header-upper'>
                <div className='header-component'>
                    <Link to='/'>
                        <h1>What's Next?</h1>
                    </Link>
                </div>
                <div className='header-component links-section'>
                    <NavLink 
                        to='/'
                        className='header-link-container'
                    >
                        <p>About</p>
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

export default HeaderNewUser;