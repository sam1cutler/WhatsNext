import { Link } from 'react-router-dom';
import './AddFriend.css';

function AddFriend() {

    return(

        <main className='add-friend-container'>
            <h2>Add a friend</h2>
            <p>Search by their email:</p>
            <form className='add-friend-form'>
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
        </main>

    )

}

export default AddFriend;