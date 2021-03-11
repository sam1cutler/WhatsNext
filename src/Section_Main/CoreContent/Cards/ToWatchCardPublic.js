import './ToWatchCardPublic.css';
import logoNetflix from '../../../images/Netflix_Logo_CMYK.png';
import logoHulu from '../../../images/hulu-logo_green_rgb.svg'
import logoDisney from '../../../images/disney.svg'
import logoHbo from '../../../images/hboMax.png'
import logoPrime from '../../../images/prime2.svg'

function ToWatchCardPublic(props) {

    const { title, service, genre } = props.cardInfo;

    const logos = {
        'Netflix': logoNetflix,
        'Hulu': logoHulu,
        'Disney': logoDisney,
        'HBO Max': logoHbo,
        'Amazon Prime': logoPrime
    }

    return (

        <div className='to-watch-show-card-public'>
            <div className='show-card-logo-div-public'>
                <img src={logos[service]} className='service-logo' alt={`logo - ${service}`}/>
            </div>

            <div className='show-card-content-div-public'>
                <div className='show-title-div show-card-main-info-half'>
                    <b>{title}</b>
                </div>
                <div className='show-card-main-info-half'>
                    {genre}
                </div>
            </div>
        </div>

    )

}

export default ToWatchCardPublic;