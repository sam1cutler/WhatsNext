import { NavLink } from 'react-router-dom';
import './HeaderFriendPages.css';

function HeaderFriendPages(props) {

    const { id, display_name, connectionId} = props.friend;

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
                    to={`/friends/${connectionId}/${id}/watched-log`}
                    className='nav-button'
                >
                    WATCHED
                </NavLink>
                <NavLink
                    to={`/friends/${connectionId}/${id}/watch-list`}
                    className='nav-button'
                >
                    TO-WATCH
                </NavLink>
            </div>
        </div>

    )
}

export default HeaderFriendPages;