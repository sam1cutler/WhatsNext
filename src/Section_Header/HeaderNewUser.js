import { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './HeaderNewUser.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import MiscHelpers from '../misc-helpers';

function HeaderNewUser() {

    const history = useHistory();
    const [ error, setError ] = useState();

    function handleEnterDemoMode() {

        AuthApiService.postLogin({
            email: 'hermes@gmail.com',
            password: 'gH4$gH4$'
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
                history.push({
                    pathname: '/watch-list'
                })
            })
            .catch(res => {
                setError(res.error)
            })
    }

    const errorMessage = MiscHelpers.generateErrorMessage(error);
    
    return (
        <header>
            <div className='header-upper'>
                <div className='header-component'>
                    <Link to='/'>
                        <h1>What's Next?</h1>
                    </Link>
                    {errorMessage}
                </div>
                
            </div>
            <div className='header-lower header-lower-new'>
                <NavLink
                    to='/signup'
                    className='nav-button'
                >
                    <b>Sign Up</b>
                </NavLink>
                <NavLink
                    to='/login'
                    className='nav-button'
                >
                    <b>Login</b>
                </NavLink>
                <div
                    to='/watch-list'
                    className='nav-button'
                    onClick={handleEnterDemoMode}
                >
                    <b>Demo</b>
                </div>
            </div>
        </header>
    )

}

export default HeaderNewUser;