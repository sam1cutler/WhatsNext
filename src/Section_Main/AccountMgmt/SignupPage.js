import { useHistory } from 'react-router';
import { useState } from 'react';
import './SignupPage.css';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

function SignupPage() {

    const history = useHistory();
    const [ error, setError ] = useState();

    function handleSignupSubmit(e) {

        e.preventDefault();

        const { email, display_name, password, passwordRepeat } = e.target;

        if (password.value !== passwordRepeat.value) {
            setError('Passwords do not match.')
            email.value = '';
            password.value = '';
            passwordRepeat.value = '';
        } else {
            AuthApiService.postUser({
                email: email.value,
                display_name: display_name.value,
                password: password.value
            })
                .then( () => {
                    AuthApiService.postLogin({
                        email: email.value,
                        password: password.value
                    })
                        .then(res => {
                            TokenService.saveAuthToken(res.saveAuthToken)

                            email.value = '';
                            password.value = '';
                            passwordRepeat.value = '';

                            history.push({
                                pathname: '/watch-list'
                            })
                        })
                        .catch(res => {
                            setError(res.error)
                        })
                })
                .catch(res => {
                    setError(res.error)
                })
        }

    }

    function generateErrorMessage() {
        if (error) {
            return (
                <div className='error-message'>
                    {error}
                </div>
            )
        }
    }

    const errorMessage = generateErrorMessage();

    return (

        <main className='signup-container'>
            <h2>Sign up for What's Next?</h2>
            {errorMessage}
            <form
                className='signup-form'
                onSubmit={handleSignupSubmit}
            >
                <div className='signup-form-section'>
                    <label htmlFor='email'>Email:</label><br />
                    <input type="email" name='email' required />
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='display_name'>Preferred display name:</label><br />
                    <input type="text" name='display_name' required />
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='password'>Password:</label><br />
                    <input type="password" name='password' required />
                </div>
                <div className='signup-form-section'>
                    <label htmlFor='passwordRepeat'>Repeat password:</label><br />
                    <input type="password" name='passwordRepeat' required />
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
