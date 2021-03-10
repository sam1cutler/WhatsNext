import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './WatchedCard.css';
import { RiEdit2Line } from 'react-icons/ri';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import logoNetflix from '../../../images/Netflix_Logo_CMYK.png';
import logoHulu from '../../../images/hulu-logo_green_rgb.svg'
import logoDisney from '../../../images/disney.svg'
import logoHbo from '../../../images/hboMax.png'
import logoPrime from '../../../images/prime2.svg'
import logoApple from '../../../images/appleTv.svg'


function renderStarRating(rating) {

    const stars = [0, 0, 0, 0, 0].map((_, i) =>
        (i < rating)
            ? <span key={i}><BsFillStarFill /></span>
            : <span key={i}><BsStar /></span>
    );
    return (
        <div className='rating-div show-card-main-info-half'>
            {stars}
        </div>
    );

}

/*
function renderStarRating(rating) {
    let finalRating = '';

    for (let i=0 ; i<rating ; i++) {
        finalRating += '<BsFillStarFill />'
    }

    for (let i=rating ; i<5 ; i++) {
        finalRating += '<BsStar />'
    }

    return finalRating;
}
*/


function WatchedCard(props) {

    const { id, title, service, genre, completed, rating } = props.cardInfo;

    const interimDate = new Date(completed);
    const finalDate = format(interimDate, 'MMM yyyy');

    const logos = {
        'Netflix': logoNetflix,
        'Hulu': logoHulu,
        'Disney': logoDisney,
        'HBOMax': logoHbo,
        'Amazon Prime': logoPrime,
        'Apple TV': logoApple
    }

    const starRating = renderStarRating(rating);

    return (

        <div className='watched-show-card'>

            <div className='watched-card-content'>
                <div className='show-card-logo-div'>
                    <img src={logos[service]} className='service-logo' alt={`logo - ${service}`}/>
                </div>

                <div className='show-card-content-div'>
                    <div className='show-title-div show-card-main-info-half'>
                        <b>{title}</b>
                    </div>
                    {starRating}
                    <div className='show-card-main-info-half'>
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