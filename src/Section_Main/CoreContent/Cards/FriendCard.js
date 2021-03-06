import { useState } from 'react';
import FriendsApiService from '../../../services/friends-api-service';
import './FriendCard.css';
import { BsTrash } from 'react-icons/bs';
import MiscHelpers from '../../../misc-helpers';

function FriendCard(props) {

    const [ deletionRequest, setDeletionRequest ] = useState(false);
    const [ error, setError ] = useState();
    
    const { id, recipient_name } = props.friendInfo || '';

    /*-- handler function for confirming friend deletion --*/
    function handleConfirmDeleteFriend(e) {

        e.preventDefault();

        FriendsApiService.deleteFriendConnection(id)
            .then( () => {
                window.location.reload();
            })
            .catch(res => {
                setError(res.error)
            })
    }

    /*-- handler functions for opening/closing "Deletion" mini-form --*/
    function handleDeleteFriendRequest(e) {
        e.preventDefault()
        setDeletionRequest(true)
    }

    function handleCancelDeleteFriendRequest(e) {
        e.preventDefault()
        setDeletionRequest(false)
    }

    /*-- Function to [conditionally] render the "Deletion" mini-form --*/
    function renderDeletionConfirmation() {

        return (
            <div className='delete-friend-confirmation'>
                <div className='delete-friend-confirmation-ques'>
                    <p><i>Confirm: delete friend?</i></p>
                </div>
                <div className='delete-friend-confirmation-buttons'>
                    <button
                        className='delete-friend-confirm-button'
                        onClick={e => handleConfirmDeleteFriend(e)}
                    >
                        Delete
                    </button>
                    <button
                        className='delete-friend-confirm-button'
                        onClick={e => handleCancelDeleteFriendRequest(e)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )
    }

    const errorMessage = MiscHelpers.generateErrorMessage(error);

    const deletionConfirmation = 
        (deletionRequest)
            ? renderDeletionConfirmation()
            : null

    return (
        <div className='friend-card'>
            <div className='friend-card-main'>
                <div className='friend-card-name'>
                    <p><b>{recipient_name}</b></p>
                </div>
                <div className='friend-card-delete'>
                    <button
                        type='click'
                        onClick={e => handleDeleteFriendRequest(e)}
                        className='friend-card-delete-button'
                    >
                        <BsTrash />
                    </button>
                </div>
            </div>
            {errorMessage}
            {deletionConfirmation}
        </div>
    )
}

export default FriendCard;