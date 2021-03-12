import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './AddShowToWatch.css';
import ShowsApiService from '../../../services/shows-api-service';
import MiscHelpers from '../../../misc-helpers';

function AddShowToWatch() {

    const history = useHistory();
    const [ error, setError ] = useState();

    function handleNewShowFormSubmission(e) {
        
        e.preventDefault();

        // de-structure content from the form / package into new object:
        const { title, service, genre } = e.target;
        const newShowInfo = {
            title: title.value,
            service: service.value,
            genre: genre.value,
            priority: 10,
            watched: false
        };

        // Use ShowApiService to make POST request
        ShowsApiService.addNewShow(newShowInfo)
            .then( () => {
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

        <main className='add-show-container'>
            <div className='form-backing'>
                <h2>Add a show to your Watch List</h2>
                {errorMessage}
                <form 
                    className='add-show-form'
                    onSubmit={handleNewShowFormSubmission}
                >
                    <div className='add-show-section'>
                        <label htmlFor='title'>Title:</label><br />
                        <input type='text' name='title' required />
                    </div>
                    <div className='add-show-section'>
                        <label htmlFor='service'>Streaming Service:</label><br />
                        <select name='service' id='service'>
                            <option value='netflix'>Netflix</option>
                            <option value='hulu'>Hulu</option>
                            <option value='hbo'>HBO Max</option>
                            <option value='amazon'>Amazon Prime</option>
                            <option value='disney'>Disney+</option>
                            <option value='apple'>Apple TV</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className='add-show-section'>
                        <label htmlFor='genre'>Genre:</label><br />
                        <select name='genre' id='genre'>
                            <option value='Drama'>Drama</option>
                            <option value='Comedy'>Comedy</option>
                            <option value='SciFi'>SciFi</option>
                            <option value='Fantasy'>Fantasy</option>
                            <option value='Crime'>Crime</option>
                            <option value='Cooking'>Cooking</option>
                            <option value='Sports'>Sports</option>
                            <option value='Documentary'>Documentary</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    
                    <div className='add-show-section'>
                        <button type='submit' className='add-show-button'>Add show</button>
                    </div>
                </form>
                <Link
                    to={'/watch-list'}
                >
                    <div className='simple-return-link'>
                        Return to Watch List
                    </div>
                </Link>
            </div>
            
        </main>

    )

}

export default AddShowToWatch;