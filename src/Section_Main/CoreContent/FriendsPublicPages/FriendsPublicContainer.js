import { useState, useEffect } from 'react';
import { useParams, Route } from 'react-router-dom';
import './FriendsPublicContainer.css';

import HeaderFriendPages from '../../../Section_Header/HeaderFriendPages';
import PublicWatchList from './PublicWatchList';
import PublicWatchedLog from './PublicWatchedLog';

import FriendsApiService from '../../../services/friends-api-service';


function renderCoreFriendContent() {

    return (
        <>
            <Route 
                path='/friends/:connectionId/:friendId/watch-list'
                exact
                component={PublicWatchList}
            />
            <Route 
                path='/friends/:connectionId/:friendId/watched-log'
                exact
                component={PublicWatchedLog}
            />
        </>
    )
}

function FriendsPublicContainer() {

    const { friendId, connectionId } = useParams();
    const [ friendInfo, setFriendInfo ] = useState( {} );
    
    // API call to /users endpoint to get friend info for header
    useEffect( () => {
        FriendsApiService.getUserInfo(friendId)
            .then( friend => {
                setFriendInfo(friend)
            })
    }, [friendId] )

    //const relevantInfo = friendInfo;
    friendInfo['connectionId'] = connectionId;



    return (
        <main className='friends-section-container'>
            <HeaderFriendPages 
                friend={friendInfo}
            />
            <div className='friends-content-container'>
                {renderCoreFriendContent()}
            </div>
        </main>
    )

}

export default FriendsPublicContainer;