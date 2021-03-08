import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ShowsApiService from '../../../services/shows-api-service';
import './ToWatchCard.css';



function ToWatchCard(props) {

    const [ completionStatus, setCompletionStatus ] = useState(false);
    const history = useHistory();

    const { id, title, service, genre } = props.cardInfo;

    /*-- handler function for SUBMITTING "Finished" from --*/
    function handleFinishedShowFormSubmission(e) {    
        
        e.preventDefault();

        const { rating } = e.target;
        const startDate = new Date();
        const completed = startDate.toISOString();

        const updatedShowInfo = {
            watched: true,
            completed,
            rating: rating.value,
            priority: null
        }

        ShowsApiService.editShow(
            id,
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

    /*-- handler functions for opening/closing "Finished" mini-form --*/
    function handleFinishingShow(e) {
        e.preventDefault()
        setCompletionStatus(true)
    }

    function handleCancelFinish(e) {
        e.preventDefault();
        setCompletionStatus(false)
    }

    /*-- Function to [conditionally] render the "Finished" mini-form --*/
    function renderRatingForm() {

        return (
            <div className='finish-show-review-section'>
                <form
                    className='finish-show-form'
                    onSubmit={e => handleFinishedShowFormSubmission(e)}
                >
                    <div className='finish-show-form-section'>
                        <label htmlFor='rating'>How was it?</label><br />
                        <select name='rating' id='rating'>
                            <option value='1'>1⭐️</option>
                            <option value='2'>2⭐️</option>
                            <option value='3'>3⭐️</option>
                            <option value='4'>4⭐️</option>
                            <option value='5'>5⭐️</option>
                        </select>
                    </div>
                    <div className='finish-show-form-section'>
                        <button
                            type='submit'
                            className='finish-show-button'
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className='finish-show-form-cancel'>
                    <button
                        type='click'
                        className='finish-show-cancel-button'
                        onClick={e => handleCancelFinish(e)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )
    }

    /*-- Logic to conditional render "finished" min-form --*/
    const ratingForm = 
        (completionStatus)
            ? renderRatingForm()
            : null

    return (

        <div className='to-watch-show-card'>
            <div className='to-watch-show-card-half'>
                
                <div>
                    <b>{title}</b>
                </div>
                <div>
                    {genre}
                </div>
            </div>

            <div className='to-watch-show-card-half'>
                <div>
                    {service}
                </div>
                <button
                    className='show-card-button'
                    onClick={e => handleFinishingShow(e)}
                >
                    Finished it!
                </button>
                <Link
                    to={`/watch-list/edit-show/${id}`}
                    className='show-card-button'
                >
                    <div >
                        Edit
                    </div>
                </Link>
            </div>
            {ratingForm}
        </div>

    )

}

export default ToWatchCard;