import { Link, NavLink, useHistory } from 'react-router-dom';
import './HeaderNewUser.css';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

function HeaderNewUser() {

    const history = useHistory();

    function handleEnterDemoMode() {

        AuthApiService.postLogin({
            email: 'jeremy@gmail.com',
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
            <div className='header-lower'>
                <NavLink
                    to='/signup'
                    className='nav-button'
                >
                    Sign Up
                </NavLink>
                <NavLink
                    to='/login'
                    className='nav-button'
                >
                    Login
                </NavLink>
                <div
                    to='/watch-list'
                    className='nav-button'
                    onClick={handleEnterDemoMode}
                >
                    Demo
                </div>
            </div>
        </header>
    )

}

export default HeaderNewUser;