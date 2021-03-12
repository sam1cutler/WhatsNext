import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './WatchedCard.css';
import cardHelpers from './cardHelpers';
import { RiEdit2Line } from 'react-icons/ri';
import ServiceLogo from './ServiceLogo';

function WatchedCard(props) {

    const { id, title, service, genre, rating } = props.cardInfo || '';
    const { completed } = props.cardInfo || {completed: "2020-09-01T07:00:00.000Z"};

    const interimDate = new Date(completed);
    const finalDate = format(interimDate, 'MMM yyyy');

    const starRating = cardHelpers.renderStarRating(rating);

    return (

        <div className='watched-show-card'>

            <div className='watched-card-content'>
                <ServiceLogo 
                    service={service}
                />

                <div className='show-card-content-div'>
                    <div className='show-title-div show-card-main-info-half'>
                        <b>{title}</b>
                    </div>
                    {starRating}
                    <div className='show-card-main-info-half genre-div'>
                        {genre}
                    </div>
                </div>

                <div className='show-card-buttons-div'>
                    <div className='watched-date-container'>
                        {finalDate}
                    </div>
                    <Link
                        to={`/watched-log/edit-show/${id}`}
                        className='show-card-button'
                    >
                        <div >
                            <RiEdit2Line />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default WatchedCard;