import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './FriendPage.css';
import FriendsApiService from '../../../services/friends-api-service';


function FriendPage() {

    const [friendInfo, setFriendInfo ] = useState( {} );
    const history = useHistory();
    const { friendId, connectionId } = useParams();

    function handleDeleteFriend(e) {

        e.preventDefault();
        console.log('delete me')

        FriendsApiService.deleteFriendConnection(connectionId)
            .then( () => {
                history.push({
                    pathname: '/friends'
                })
            })
            .catch(error => {
                // eventually communicate
                console.log(error)
            })
    }

    useEffect( () => {

        FriendsApiService.getUserInfo(friendId)
            .then( friendInfo => {
                setFriendInfo(friendInfo);
            })

    }, [friendId] )

    const { id, email, display_name } = friendInfo;

    return (

        <main className='friend-page-container'>
            <div className='friend-info-container'>
                <h3>{display_name}</h3>
                <p>{email}</p>
                <Link
                    to={`/friends/${connectionId}/${id}/watch-list`}
                >
                    <div className='friend-page-linkout-button'>
                        Visit {display_name}'s Watch List
                    </div>
                </Link>
                <Link
                    to={`/friends/${connectionId}/${id}/watched-log`}
                >
                <div className='friend-page-linkout-button'>
                    Visit {display_name}'s Watched Log
                </div>
                </Link>
                <button
                    className='delete-friend-button'
                    onClick={e => handleDeleteFriend(e)}
                >
                    Remove friend
                </button>
            </div>
            <Link
                to={'/friends'}
            >
                <div className='simple-return-link'>
                    Return to Friends List
                </div>
            </Link>
        </main>

    )
}

export default FriendPage;