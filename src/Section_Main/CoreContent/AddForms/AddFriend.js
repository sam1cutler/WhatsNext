import './AddFriend.css';

function AddFriend() {

    return(

        <main className='add-friend-container'>
            <h2>Add a friend</h2>
            <p>Search by username or email:</p>
            <form className='add-friend-form'>
                <div className='add-friend-section'>
                    <label htmlFor='email'>Email:</label><br />
                    <input type='email' name='email' />
                </div>
                <div className='add-friend-section'>
                    <label htmlFor='username'>Username:</label><br />
                    <input type='username' name='username' />
                </div>
                <div className='add-friend-section'>
                    <button type='submit' className='add-friend-button'>Add friend</button>
                </div>
            </form>
        </main>

    )

}

export default AddFriend;