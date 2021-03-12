import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import './EditShowWatched.css';
import ShowsApiService from '../../../services/shows-api-service';
import MiscHelpers from '../../../misc-helpers';

function EditShowWatched() {

    /*-- declare necessary hook features --*/
    const [ activeShow, setActiveShow ] = useState( [] );
    const [ error, setError ] = useState();
    const history = useHistory();
    const { showId } = useParams();

    /*-- handler function for EDIT SHOW submissions --*/
    function handleEditShowFormSubmission(e) {
        
        e.preventDefault();

        // de-structure content from the form / package into new object:
        const { title, service, genre, month, year, rating } = e.target;

        // Combine month/year inputs into a UTC-formatted date
        const startDate = `${year.value}-${month.value}-15T00:00:00`;
        const intDate = new Date(startDate);
        const completed = intDate.toISOString();

        const updatedShowInfo = {
            title: title.value,
            service: service.value,
            genre: genre.value,
            completed,
            rating: rating.value,
            watched: true,
        };

        // Use ShowApiService to make PATCH request
        ShowsApiService.editShow(
            showId,
            updatedShowInfo
        )
            .then( () => {
                history.push({
                    pathname: '/watched-log'
                })
            })
            .catch(res => {
                setError(res.error)
            })
    }

    /*-- handler function for DELETE SHOW requests --*/
    function handleDeleteShow(e) {
        e.preventDefault();

        ShowsApiService.deleteShow(showId)
            .then( () => {
                history.push({
                    pathname: '/watched-log'
                })
            })
            .catch(res => {
                setError(res.error)
            })

    }

    /*-- ShowID-specific GET request to populate form w/existing show info --*/
    useEffect( () => {

        ShowsApiService.getShowById(showId)
            .then( showResult => {
                setActiveShow(showResult)
            })

    }, [showId] )

    // destructure relevant values from API-obtained, state-stored show info
    const { title, service, genre, rating, completed } = activeShow || '';

    // destructure month and year from date
    let month = '';
    let year = '';

    if (completed) {
        year = completed.slice(0, 4);
        month = completed.slice(5,7);
    }

    const errorMessage = MiscHelpers.generateErrorMessage(error);

    return (

        <main className='edit-show-container'>
            <div className='form-backing'>
                <h2>Edit info about {title}:</h2>
                {errorMessage}
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
                        <select name='service' id='service' defaultValue={service} key={service}>
                            <option value='netflix'>Netflix</option>
                            <option value='hulu'>Hulu</option>
                            <option value='hbo'>HBO Max</option>
                            <option value='amazon'>Amazon Prime</option>
                            <option value='disney'>Disney+</option>
                            <option value='apple'>Apple TV</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div className='edit-show-section'>
                        <label htmlFor='genre'>Genre:</label><br />
                        <select name='genre' id='genre' defaultValue={genre} key={genre}>
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
                    <div className='edit-show-section'>
                        <p>Date watched:</p>
                        <div className='date-picker'>
                            <div className='date-component'>
                                <label htmlFor='month'>Month:</label><br />
                                <select name='month' id='month' defaultValue={month} key={month}>
                                    <option value='01'>Jan</option>
                                    <option value='02'>Feb</option>
                                    <option value='03'>Mar</option>
                                    <option value='04'>Apr</option>
                                    <option value='05'>May</option>
                                    <option value='06'>Jun</option>
                                    <option value='07'>Jul</option>
                                    <option value='08'>Aug</option>
                                    <option value='09'>Sep</option>
                                    <option value='10'>Oct</option>
                                    <option value='11'>Nov</option>
                                    <option value='12'>Dec</option>
                                </select>
                            </div>
                            <div className='date-component'>
                                <label htmlFor='year'>Year:</label><br />
                                <select name='year' id='year' defaultValue={year} key={year}>
                                    <option value='2021'>2021</option>
                                    <option value='2020'>2020</option>
                                    <option value='2019'>2019</option>
                                    <option value='2018'>2018</option>
                                    <option value='2017'>2017</option>
                                    <option value='2016'>2016</option>
                                    <option value='2015'>2015</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='edit-show-section'>
                        <label htmlFor='rating'>Rating:</label><br />
                        <select name='rating' id='rating' defaultValue={rating} key={rating}>
                            <option value='1'>1⭐️</option>
                            <option value='2'>2⭐️</option>
                            <option value='3'>3⭐️</option>
                            <option value='4'>4⭐️</option>
                            <option value='5'>5⭐️</option>
                        </select>
                    </div>
                    <div className='edit-show-section'>
                        <button type='submit' className='edit-show-button'>Update show info</button>
                    </div>
                </form>
                <Link
                    to={'/watched-log'}
                >
                    <div className='simple-return-link'>
                        Return to Watched Log List
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
            </div>        
        </main>
    )
}

export default EditShowWatched;