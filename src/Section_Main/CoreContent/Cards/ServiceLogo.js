import logoNetflix from '../../../images/Netflix_Logo_CMYK.png';
import logoHulu from '../../../images/hulu-logo_green_rgb.svg';
import logoDisney from '../../../images/disney.svg';
import logoHbo from '../../../images/hboMax.png';
import logoPrime from '../../../images/prime2.svg';
import logoApple from '../../../images/appleTv.svg';
import logoOther from '../../../images/television3.png';

function ServiceLogo(props) {

    const { service } = props || '';

    const logos = {
        'netflix': logoNetflix,
        'hulu': logoHulu,
        'disney': logoDisney,
        'hbo': logoHbo,
        'amazon': logoPrime,
        'apple': logoApple,
        'other': logoOther
    }

    return (
        <div className='show-card-logo-div'>
            <img src={logos[service]} className='service-logo' alt={`logo - ${service}`}/>
        </div>
    )

}

export default ServiceLogo;