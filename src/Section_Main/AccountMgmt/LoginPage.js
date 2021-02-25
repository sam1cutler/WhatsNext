import './LoginPage.css';

function LoginPage() {

    return (

        <div className='login-container'>
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
                    <button type='submit'>Sign up</button>
                </div>
            </form>
        </div>

    )

}

export default LoginPage;