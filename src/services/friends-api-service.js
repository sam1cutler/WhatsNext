import config from '../config';
import TokenService from './token-service';

const FriendsApiService = {

    getFriends() {
        return fetch(`${config.API_ENDPOINT}/friends/`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getUserInfo(user) {
        return fetch(`${config.API_ENDPOINT}/users/${user}/public`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }

}

export default FriendsApiService;