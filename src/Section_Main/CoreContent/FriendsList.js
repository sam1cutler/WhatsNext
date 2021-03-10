import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FriendCard from './Cards/FriendCard';
import './FriendsList.css';
import { FaPlus } from 'react-icons/fa';
import FriendsApiService from '../../services/friends-api-service';
//import TokenService from '../../services/token-service';



function renderFriendsList(friendsList) {

    //console.log(friendsList);

    return friendsList.map( (activeFriend, i) => {
        return (
            <Link
                key={i}
                to={`/friends/${activeFriend.id}/${activeFriend.recipient_id}/watch-list`}
            >
                <FriendCard 
                    friendInfo={activeFriend}
                />
            </Link>
            
        )
    })
    
}

function FriendsList() {

    const [ friendsList, setFriendsList ] = useState( [] );

    useEffect( () => {
        FriendsApiService.getFriends()
            .then(friendsList => {
                setFriendsList(friendsList);
            })
    }, [] )

    const listOfFriends = renderFriendsList(friendsList);

    return(

        <main className='friends-list-container'>
            
            {listOfFriends}

            <Link 
                to='/friends/add-friend'    
            >
                <div className='add-button'>
                    <FaPlus />
                </div>
            </Link>

        </main>

    )

}

export default FriendsList;