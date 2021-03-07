import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FriendsPublicContainer.css';
import HeaderFriendPages from '../../../Section_Header/HeaderFriendPages';
import FriendsApiService from '../../../services/friends-api-service';


function FriendsPublicContainer() {

    const { friendId } = useParams();
    const [ friendInfo, setFriendInfo ] = useState( {} );
    

    useEffect( () => {
        FriendsApiService.getUserInfo(friendId)
            .then( friend => {
                setFriendInfo(friend)
            })
    }, [friendId] )

    return (
        <main className='friends-section-container'>
            <HeaderFriendPages 
                friend={friendInfo}
            />
            <div className='friends-content-container'>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
                <div className='get-big'>
                    Friend show
                </div>
            </div>
        </main>
    )

}

export default FriendsPublicContainer;