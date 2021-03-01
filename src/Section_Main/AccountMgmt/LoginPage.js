import './LoginPage.css';

function LoginPage() {

    return (

        <main className='login-container'>
            <h2>Log in</h2>
            <form className='login-form'>
                <div className='login-form-section'>
                    <label htmlFor='user-email'>Email:</label><br />
                    <input type="email" name='email' required />
                </div>
                <div className='login-form-section'>
                    <label htmlFor='user-password'>Password:</label><br />
                    <input type="password" name='user-password' required />
                </div>
                <div className='login-form-section'>
                    <button type='submit' className='login-button'>Log in</button>
                </div>
            </form>
        </main>

    )

}

export default LoginPage;