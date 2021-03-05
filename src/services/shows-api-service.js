import config from '../config';
//import TokenService from './token-service';

const ShowsApiService = {

    getShows() {
        return fetch(`${config.API_ENDPOINT}/shows/get/2`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }

}

export default ShowsApiService;