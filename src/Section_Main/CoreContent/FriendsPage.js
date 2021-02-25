import { NavLink } from 'react-router-dom';
import FriendCard from './Cards/FriendCard';
import './FriendsPage.css';

import STORE from './store'

function renderFriendsList(friendsList) {

    return friendsList.map( (activeFriend, i) => {
        return (
            <FriendCard 
                key={i}
                friendInfo={activeFriend}
            />
        )
    })
    
}

function FriendsPage() {

    const listOfFriends = renderFriendsList(STORE.friends);

    return(

        <div className='friends-list-container'>
            
            {listOfFriends}

            <NavLink 
                to='/add-friend'    
            >
                <div className='add-button'>
                    Add friend
                </div>
            </NavLink>

        </div>

    )

}

export default FriendsPage;