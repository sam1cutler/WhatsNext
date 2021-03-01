import './SignupPage.css';

function SignupPage() {

    return (

        <main className='signup-container'>
            <h2>Sign up for What's Next?</h2>
            <form className='signup-form'>
                <div className='signup-form-section'>
                    <label htmlFor='user-email'>Email:</label><br />
                    <input type="email" name='email' required />
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='username'>Username:</label><br />
                    <input type="text" name='username' required />
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='user-password1'>Password:</label><br />
                    <input type="password" name='user-password1' required />
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='user-password2'>Repeat password:</label><br />
                    <input type="password" name='user-password2' required />
                </div>
                <div className='signup-form-section'>
                    <button type='submit' className='signup-button'>Sign up</button>
                </div>
            </form>
        </main>

    )

}

export default SignupPage;

/*

<div>
            

            <form id='signup-form'>
                <div className='signup-form-section'>
                    <label htmlFor='user-email'>Email:</label><br />
                    <input type="email" name='email' required>
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='username'>Username:</label><br />
                    <input type="text" name='username' required>
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='user-password1'>Password:</label><br />
                    <input type="password" name='user-password1' required>
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='user-password2'>Repeat password:</label><br />
                    <input type="password" name='user-password2' required>
                </div>
                <div className='signup-form-section'>
                    <button type='submit'>Sign up</button>
                </div>
            </form>
            
        </div>

*/
