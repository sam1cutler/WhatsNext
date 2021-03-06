
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import MiscHelpers from '../../misc-helpers';


function LoginPage() {

    const history = useHistory();
    const [ error, setError ] = useState();

    function handleSubmitJwtAuth(e) {

        e.preventDefault();
    
        // de-structure email/pw from form
        const { email, password } = e.target;
    
        // Use AuthApiService to make POST request to API
        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            // if server interaction works properly, will provide authToken in response
            .then(res => {
                // clear form values
                email.value = '';
                password.value = '';
    
                // save authToken in the browser
                TokenService.saveAuthToken(res.authToken)
    
                // push to proper "logged in" welcome page
                history.push({
                    pathname: '/watch-list'
                })
            })
            .catch(res => {
                // clear form values
                email.value = '';
                password.value = '';
    
                setError(res.error)
            })
    }

    const errorMessage = MiscHelpers.generateErrorMessage(error);

    return (
        <main className='login-container'>
            <div className='form-backing'>
                <h2>Log in</h2>
                {errorMessage}
                <form 
                    id='login-form'
                    className='login-form'
                    onSubmit={handleSubmitJwtAuth}
                >
                    <div className='login-form-section'>
                        <label htmlFor='email'>Email:</label><br />
                        <input type="email" name='email' required />
                    </div>
                    <div className='login-form-section'>
                        <label htmlFor='password'>Password:</label><br />
                        <input type="password" name='password' required />
                    </div>
                    <div className='login-form-section'>
                        <button type='submit' className='login-button'>Log in</button>
                    </div>
                </form>
            </div>    
        </main>
    )
}

export default LoginPage;