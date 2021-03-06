import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import './EditShowToWatch.css';
import ShowsApiService from '../../../services/shows-api-service';
import TokenService from '../../../services/token-service';

function EditShowToWatch() {

    /*-- declare necessary hook features --*/
    const [ activeShow, setActiveShow ] = useState( [] );
    const history = useHistory();
    const { showId } = useParams();

    //console.log(activeShow)

    /*-- handler function for EDIT SHOW submissions --*/
    function handleEditShowFormSubmission(e) {

        console.log('editing a show')
        
        e.preventDefault();

        // de-structure content from the form / package into new object:
        const { title, service, genre } = e.target;
        const updatedShowInfo = {
            title: title.value,
            service: service.value,
            genre: genre.value,
            priority: 10,
            watched: false
        };

        // Use ShowApiService to make PATCH request
        ShowsApiService.editShow(
            showId,
            updatedShowInfo
        )
            .then( () => {
                history.push({
                    pathname: '/watch-list'
                })
            })
            .catch(res => {
                console.log(res.error)
            })
    }

    /*-- handler function for DELETE SHOW requests --*/
    function handleDeleteShow(e) {
        e.preventDefault();

        ShowsApiService.deleteShow(showId)
            .then( () => {
                history.push({
                    pathname: '/watch-list'
                })
            })
            .catch(error => {
                // EVENTUALLY SHARE W/USER
                console.log(error)
            })

    }

    /*-- ShowID-specific GET request to populate form w/existing show info --*/
    useEffect( () => {

        const activeUser = TokenService.getUserId();

        ShowsApiService.getShowById(activeUser, showId)
            .then( showResult => {
                setActiveShow(showResult)
            })

    }, [] )

    // destructure relevant values from API-obtained, state-stored show info
    const { title, service, genre } = activeShow || '';

    return (

        <main className='edit-show-container'>
            <h2>Edit a show on your Watch List</h2>
            <form 
                className='edit-show-form'
                onSubmit={handleEditShowFormSubmission}
            >
                <div className='edit-show-section'>
                    <label htmlFor='title'>Title:</label><br />
                    <input type='text' name='title' required defaultValue={title}/>
                </div>
                <div className='edit-show-section'>
                    <label htmlFor='service'>Streaming Service:</label><br />
                    <select name='service' id='service' defaultValue={service} >
                        <option value='Netflix'>Netflix</option>
                        <option value='Hulu'>Hulu</option>
                        <option value='HBOMax'>HBOMax</option>
                        <option value='Amazon Prime'>Amazon Prime</option>
                        <option value='other'>Other</option>
                        <option value='dont-know'>Don't know</option>
                    </select>
                </div>
                <div className='edit-show-section'>
                    <label htmlFor='genre'>Genre:</label><br />
                    <select name='genre' id='genre' defaultValue={genre}>
                        <option value='Drama'>Drama</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Documentary'>Documentary</option>
                        <option value='Cooking'>Cooking</option>
                        <option value='SciFi'>SciFi</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Crime'>Crime</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className='edit-show-section'>
                    <label htmlFor='priority'>Priority:</label><br />
                    <select name='priority' id='priority'>
                        <option value='top'>Top</option>
                        <option value='middle'>Middle</option>
                        <option value='bottom'>Bottom</option>
                    </select>
                </div>
                <div className='edit-show-section'>
                    <button type='submit' className='edit-show-button'>Update show info</button>
                </div>
            </form>
            <Link
                to={'/watch-list'}
            >
                <div className='return-link'>
                    Return to Watch List
                </div>
            </Link>
            <div className='edit-show-section'>
                <button 
                    type='click' 
                    className='delete-show-button'
                    onClick={handleDeleteShow}
                >
                    DELETE show
                </button>
            </div>
        </main>

    )

}

export default EditShowToWatch;