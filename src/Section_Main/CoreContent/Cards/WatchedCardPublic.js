import { format } from 'date-fns';
import './WatchedCardPublic.css';
import cardHelpers from './cardHelpers';
import ServiceLogo from './ServiceLogo';

function WatchedCardPublic(props) {

    const { title, service, genre, rating } = props.cardInfo || '';
    const { completed } = props.cardInfo || {completed: "2020-09-01T07:00:00.000Z"};

    const interimDate = new Date(completed);
    const finalDate = format(interimDate, 'MMM yyyy');

    const starRating = cardHelpers.renderStarRating(rating);

    return (
        <div className='watched-show-card-public'>

            <div className='watched-card-content'>
                <ServiceLogo 
                    service={service}
                />

                <div className='watched-show-card-content-div-public'>
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
                </div>
            </div>
        </div>
    )

}

export default WatchedCardPublic;