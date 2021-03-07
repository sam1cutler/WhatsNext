import { NavLink } from 'react-router-dom';
import './HeaderFriendPages.css';

function HeaderFriendPages(props) {

    const { id, display_name} = props.friend;

    return (
        <div className='friend-page-header-container'>
            <div className='friend-header-upper'>
                <div className='header-component'>
                    <div>
                        {display_name}
                    </div>
                </div>
            </div>
            <div className='friend-header-lower'>
                <NavLink
                    to={`/friends/${id}/watched-log`}
                    className='nav-button'
                >
                    WATCHED
                </NavLink>
                <NavLink
                    to={`/friends/${id}/watch-list`}
                    className='nav-button'
                >
                    TO-WATCH
                </NavLink>
            </div>
        </div>

    )
}

export default HeaderFriendPages;