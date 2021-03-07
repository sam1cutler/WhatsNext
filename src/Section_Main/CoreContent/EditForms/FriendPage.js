import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './FriendPage.css';
import FriendsApiService from '../../../services/friends-api-service';




function FriendPage() {

    const [friendInfo, setFriendInfo ] = useState( {} );
    const { friendId } = useParams();

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
                    to={`/friends/${id}/watch-list`}
                >
                    <div className='friend-page-linkout-button'>
                        Visit {display_name}'s Watch List
                    </div>
                </Link>
                <Link
                    to={`/friends/${id}/watched-log`}
                >
                <div className='friend-page-linkout-button'>
                    Visit {display_name}'s Watched Log
                </div>
                </Link>
                <button className='delete-friend-button'>
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