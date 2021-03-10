import { NavLink } from 'react-router-dom';
import './HeaderFriendPages.css';
import { FiArrowRightCircle } from 'react-icons/fi';
import { AiOutlineCheckSquare } from 'react-icons/ai';


function HeaderFriendPages(props) {

    const { id, display_name, connectionId} = props.friend;

    return (
        <div className='friend-page-header-container'>
            <div className='friend-header-upper'>
                <div className='header-component friend-name-container'>
                    {display_name}
                </div>
            </div>
            <div className='friend-header-lower'>
                <NavLink
                    to={`/friends/${connectionId}/${id}/watched-log`}
                    className='nav-button'
                >
                    <AiOutlineCheckSquare />
                </NavLink>
                <NavLink
                    to={`/friends/${connectionId}/${id}/watch-list`}
                    className='nav-button'
                >
                    <FiArrowRightCircle />
                </NavLink>
            </div>
        </div>

    )
}

export default HeaderFriendPages;