import { useHistory, Link } from 'react-router-dom';
import './AddShowWatched.css';
import ShowsApiService from '../../../services/shows-api-service';

function AddShowWatched() {

    const history = useHistory();

    function handleNewShowFormSubmission(e) {
        
        e.preventDefault();

        // de-structure content from the form / package into new object:
        const { title, service, genre, month, year, rating } = e.target;

        // Combine month/year inputs into a UTC-formatted date
        const startDate = `${year.value}-${month.value}-15T00:00:00`;
        const intDate = new Date(startDate);
        const completed = intDate.toISOString();

        const newShowInfo = {
            title: title.value,
            service: service.value,
            genre: genre.value,
            completed,
            rating: rating.value,
            watched: true,
        };

        
        // Use ShowApiService to make POST request
        ShowsApiService.addNewShow(newShowInfo)
            .then( () => {
                history.push({
                    pathname: '/watched-log'
                })
            })
            .catch(res => {
                console.log(res.error)
            })
            
    }

    return(

        <main className='add-show-container'>
            <h2>Add a show to your Log of Watched Shows</h2>
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
                    <p>Date watched:</p>
                    <div className='date-picker'>
                        <div className='date-component'>
                            <label htmlFor='month'>Month:</label><br />
                            <select name='month' id='month'>
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
                            <select name='year' id='year'>
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
                <div className='add-show-section'>
                    <label htmlFor='rating'>Rating:</label><br />
                    <select name='rating' id='rating'>
                        <option value='1'>1⭐️</option>
                        <option value='2'>2⭐️</option>
                        <option value='3'>3⭐️</option>
                        <option value='4'>4⭐️</option>
                        <option value='5'>5⭐️</option>
                    </select>
                </div>
                <div className='add-show-section'>
                    <button type='submit' className='add-show-button'>Add show</button>
                </div>
            </form>
            <Link
                to={'/watched-log'}
            >
                <div className='simple-return-link'>
                    Return to Watched Log List
                </div>
            </Link>
        </main>

    )

}

export default AddShowWatched;