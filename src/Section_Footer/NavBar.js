import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

    return (
        <nav>
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
        </nav>
    )

}

export default NavBar;