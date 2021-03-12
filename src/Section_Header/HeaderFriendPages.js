import { Link, NavLink } from 'react-router-dom';
import './HeaderFriendPages.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';


function HeaderFriendPages(props) {

    const { id, display_name, connectionId} = props.friend;

    return (
        <div className='friend-page-header-container'>
            <div className='friend-header-upper'>
                <div className='friend-name-container'>
                    <b><i>{display_name}</i></b>
                </div>
                <Link 
                    to={`/friends`}
                    className='friend-name-cancel-container'
                >
                    <ImCancelCircle />
                </Link>
            </div>
            <div className='friend-header-lower'>
                <NavLink
                    to={`/friends/${connectionId}/${id}/watched-log`}
                    className='nav-button friend-nav-button'
                >
                    <AiOutlineCheckSquare />
                </NavLink>
                <NavLink
                    to={`/friends/${connectionId}/${id}/watch-list`}
                    className='nav-button friend-nav-button'
                >
                    <FiArrowRightCircle />
                </NavLink>
            </div>
        </div>

    )
}

export default HeaderFriendPages;