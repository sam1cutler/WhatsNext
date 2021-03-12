import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FriendCard from './Cards/FriendCard';
import './FriendsList.css';
import { FaPlus } from 'react-icons/fa';
import FriendsApiService from '../../services/friends-api-service';

function renderFriendsList(friendsList) {

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

function renderWelcome() {
    return (
        <div className='watch-list-welcome-message form-backing'>
            <h2>You don't have any friend connections yet!</h2>
            <div className='add-friend-message form-backing'>
                <p>Add a friend here.</p>
            </div>
            <div className='add-show-pointer'>
                ➞
            </div>      
        </div>
    )
}

function FriendsList() {

    const [ friendsList, setFriendsList ] = useState( [] );

    useEffect( () => {

        FriendsApiService.getFriends()
            .then(friendsList => {
                setFriendsList(friendsList);
            })

    }, [] )

    // Render either showListDisplay or a welcome message
    const friendsListDisplay = 
        (friendsList.length > 0)
            ? renderFriendsList(friendsList)
            : renderWelcome()

    return (
        <main className='friends-list-container'>
            {friendsListDisplay}
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