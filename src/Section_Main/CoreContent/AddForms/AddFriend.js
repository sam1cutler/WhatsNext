import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './AddFriend.css';
import FriendsApiService from '../../../services/friends-api-service';
import MiscHelpers from '../../../misc-helpers';


function AddFriend() {

    const history = useHistory();
    const [ error, setError ] = useState();

    function handleAddFriend(e) {

        e.preventDefault();

        const { email } = e.target;

        const newConnection = {
            target_friend_email: email.value
        }

        FriendsApiService.addFriendConnection(newConnection)
            .then( () => {
                history.push({
                    pathname: '/friends'
                })
            })
            .catch(res => {
                setError(res.error)
            })
    }

    const errorMessage = MiscHelpers.generateErrorMessage(error);

    return(

        <main className='add-friend-container'>
            <div className='form-backing'>
                <h2>Add a friend</h2>
                {errorMessage}
                <p>Search by their email:</p>
                <form
                    className='add-friend-form'
                    onSubmit={ e => handleAddFriend(e) }
                >
                    <div className='add-friend-section'>
                        <label htmlFor='email'>Email:</label><br />
                        <input type='email' name='email' />
                    </div>
                    <div className='add-friend-section'>
                        <button type='submit' className='add-friend-button'>Add friend</button>
                    </div>
                </form>
                <Link
                    to={'/friends'}
                >
                    <div className='simple-return-link'>
                        Return to Friends List
                    </div>
                </Link>
            </div>
            
        </main>

    )

}

export default AddFriend;