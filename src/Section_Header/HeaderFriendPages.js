import { Link } from 'react-router-dom';
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
                <Link
                    to={`/friends/${id}/watched-log`}
                    className='nav-button'
                >
                    WATCHED
                </Link>
                <Link
                    to={`/friends/${id}/watch-list`}
                    className='nav-button'
                >
                    TO-WATCH
                </Link>
            </div>
        </div>

    )
}

export default HeaderFriendPages;