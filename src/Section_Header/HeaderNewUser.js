import { Link, NavLink, useHistory } from 'react-router-dom';
import './HeaderNewUser.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

function HeaderNewUser() {

    const history = useHistory();

    function handleEnterDemoMode() {

        AuthApiService.postLogin({
            email: 'hermes@gmail.com',
            password: 'gH4$gH4$'
        })
            .then(res => {
                TokenService.saveUserId(res.user_id);
                TokenService.saveAuthToken(res.authToken);
                history.push({
                    pathname: '/watch-list'
                })
            })
            .catch(res => {
                console.log(res.error)
            })
    }
    
    return (
        <header>
            <div className='header-upper'>
                <div className='header-component'>
                    <Link to='/'>
                        <h1>What's Next?</h1>
                    </Link>
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