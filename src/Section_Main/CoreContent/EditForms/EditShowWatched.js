import { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
//import { format } from 'date-fns';
import './EditShowWatched.css';
import ShowsApiService from '../../../services/shows-api-service';
import TokenService from '../../../services/token-service';

function EditShowWatched() {

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
        const { title, service, genre, month, year, rating } = e.target;

        // Combine month/year inputs into a UTC-formatted date
        const startDate = `${month.value}-${year.value}`;
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

    }, [showId] )

    // destructure relevant values from API-obtained, state-stored show info
    const { title } = activeShow || '';

    /*
    // further destructure month/year from completed date:
    function splitDate(inputDate) {
        let dateSplit = [];
        if (inputDate) {
            const interimDate = new Date(completed);
            const finalDate = format(interimDate, 'MMM yyyy');
            dateSplit = finalDate.split(' ');
        }
        return dateSplit;
    }

    const monthYear = splitDate(completed);
    */
    
    
    

    return (

        <main className='edit-show-container'>
            <h2>Add a show to your Log of Watched Shows</h2>
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
                    <select name='service' id='service'>
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
                    <select name='genre' id='genre'>
                        <option value='Drama'>Drama</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Documentary'>Documentary</option>
                        <option value='SciFi'>SciFi</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Crime'>Crime</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className='edit-show-section'>
                    <p>Date watched:</p>
                    <div className='date-picker'>
                        <div className='date-component'>
                            <label htmlFor='month'>Month:</label><br />
                            <select name='month' id='month' >
                                <option value='Jan'>Jan</option>
                                <option value='Feb'>Feb</option>
                                <option value='Mar'>Mar</option>
                                <option value='Apr'>Apr</option>
                                <option value='May'>May</option>
                                <option value='Jun'>Jun</option>
                                <option value='Jul'>Jul</option>
                                <option value='Aug'>Aug</option>
                                <option value='Sep'>Sep</option>
                                <option value='Oct'>Oct</option>
                                <option value='Nov'>Nov</option>
                                <option value='Dec'>Dec</option>
                            </select>
                        </div>
                        <div className='date-component'>
                            <label htmlFor='year'>Year:</label><br />
                            <select name='year' id='year' defaultValue='2019'>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017'>2017</option>
                                <option value='2018'>2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021'>2021</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='edit-show-section'>
                    <label htmlFor='rating'>Rating:</label><br />
                    <select name='rating' id='rating'>
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
        </main>
            
        

    )

}

export default EditShowWatched;