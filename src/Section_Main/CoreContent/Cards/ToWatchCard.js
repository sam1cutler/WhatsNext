import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ShowsApiService from '../../../services/shows-api-service';
import './ToWatchCard.css';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { RiEdit2Line } from 'react-icons/ri';
import { ImCancelCircle } from 'react-icons/im'
import ServiceLogo from './ServiceLogo';

function ToWatchCard(props) {

    const [ completionStatus, setCompletionStatus ] = useState(false);
    const history = useHistory();

    const { id, title, service, genre } = props.cardInfo || '';

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
                        <label htmlFor='rating' className='finish-q-label'>How was it?</label>
                        <select name='rating' id='rating'>
                            <option value='5'>5⭐️</option>
                            <option value='4'>4⭐️</option>
                            <option value='3'>3⭐️</option>
                            <option value='2'>2⭐️</option>
                            <option value='1'>1⭐️</option>
                        </select>
                    </div>
                    <div className='finish-show-form-section'>
                        <button
                            type='submit'
                            className='finish-show-button'
                        >
                            Finished!
                        </button>
                    </div>
                </form>
                <div className='finish-show-form-cancel'>
                    <button
                        type='click'
                        className='finish-show-cancel-button'
                        onClick={e => handleCancelFinish(e)}
                    >
                        <div className='finish-show-cancel-button-button'>
                            <ImCancelCircle />
                        </div>
                        
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

            <div className='to-watch-card-content'>
                <ServiceLogo 
                    service={service}
                />
                <div className='show-card-content-div'>
                    <div className='show-title-div show-card-main-info-half'>
                        <b>{title}</b>
                    </div>
                    <div className='show-card-main-info-half genre-div'>
                        {genre}
                    </div>
                </div>

                <div className='show-card-buttons-div'>
                    <button
                        type='click'
                        className='show-card-button'
                        onClick={e => handleFinishingShow(e)}
                    >
                        <AiOutlineCheckSquare />
                    </button>
                    <Link
                        to={`/watch-list/edit-show/${id}`}
                        className='show-card-button'
                    >
                        <div >
                            <RiEdit2Line />
                        </div>
                    </Link>
                </div>
            </div>
            {ratingForm}
        </div>

    )

}

export default ToWatchCard;