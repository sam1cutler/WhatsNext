import { format } from 'date-fns';
import './WatchedCardPublic.css';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import logoNetflix from '../../../images/Netflix_Logo_CMYK.png';
import logoHulu from '../../../images/hulu-logo_green_rgb.svg'
import logoDisney from '../../../images/disney.svg'
import logoHbo from '../../../images/hboMax.png'
import logoPrime from '../../../images/prime2.svg'
import logoApple from '../../../images/appleTv.svg'

function WatchedCardPublic(props) {

    const { title, service, genre, completed } = props.cardInfo;

    const logos = {
        'Netflix': logoNetflix,
        'Hulu': logoHulu,
        'Disney': logoDisney,
        'HBOMax': logoHbo,
        'Amazon Prime': logoPrime,
        'Apple TV': logoApple
    }

    const interimDate = new Date(completed);
    const finalDate = format(interimDate, 'MMM yyyy');

    return (
        <div className='watched-show-card'>

            <div className='watched-card-content'>
                <div className='show-card-logo-div'>
                    <img src={logos[service]} className='service-logo' alt={`logo - ${service}`}/>
                </div>

                <div className='watched-show-card-content-div-public'>
                    <div className='show-title-div show-card-main-info-half'>
                        <b>{title} (<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsStar /><BsStar />) </b>
                    </div>
                    <div className='show-card-main-info-half'>
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