import './ToWatchCardPublic.css';
import ServiceLogo from './ServiceLogo';

function ToWatchCardPublic(props) {

    const { title, service, genre } = props.cardInfo;

    return (

        <div className='to-watch-show-card-public'>
            <ServiceLogo 
                service={service}
            />

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