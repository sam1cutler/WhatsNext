
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
//import config from '../../config';


function LoginPage() {

    const history = useHistory();

    function handleSubmitJwtAuth(e) {

        e.preventDefault();
        console.log('user wants to log in!')
    
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
                
                // save user's ID in the browser...
                TokenService.saveUserId(res.user_id)
    
                // push to proper "logged in" welcome page
                history.push({
                    pathname: '/watch-list'
                })
            })
            .catch(res => {
                // clear form values
                email.value = '';
                password.value = '';
    
                // IMPLEMENT STATEFUL ERROR MESSAGE EVENTUALLY
                console.log(res.error)
            })
    }

    

    return (

        <main className='login-container'>
            <h2>Log in</h2>
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
        </main>

    )

}

export default LoginPage;