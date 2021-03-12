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
        return fetch(`${config.API_ENDPOINT}/users/${user}/public/info`, {
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

    addFriendConnection(targetFriendEmail) {
        return fetch(`${config.API_ENDPOINT}/friends`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(targetFriendEmail)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong with add friend request.')
                }
            })
    },

    deleteFriendConnection(connection) {
        return fetch(`${config.API_ENDPOINT}/friends/${connection}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
    }

}

export default FriendsApiService;