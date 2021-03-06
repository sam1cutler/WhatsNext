import config from '../config';
import TokenService from './token-service';
//import TokenService from './token-service';

const ShowsApiService = {

    getShows(user) {
        return fetch(`${config.API_ENDPOINT}/shows/get/${user}`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getShowById(user, showId) {
        return fetch(`${config.API_ENDPOINT}/shows/get/${user}/${showId}`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    addNewShow(newShow) {
        return fetch(`${config.API_ENDPOINT}/shows`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newShow)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong with add show request.')
                }
            })
    },

    editShow(showId, updatedShowInfo) {
        return fetch(`${config.API_ENDPOINT}/shows/${showId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(updatedShowInfo),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong with edit show request.')
                }
            })
            .catch(error => {
                throw new Error('Something went wrong!')
            })
    },

    deleteShow(showId) {
        return fetch(`${config.API_ENDPOINT}/shows/${showId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
    }

}

export default ShowsApiService;