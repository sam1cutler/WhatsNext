import { format } from 'date-fns';
import './WatchedCardPublic.css';

function WatchedCardPublic(props) {

    const { title, service, genre, completed, rating } = props.cardInfo;

    const interimDate = new Date(completed);
    const finalDate = format(interimDate, 'MMM yyyy');

    return (
        <div className='watched-show-card'>
            <div className='watched-card-half'>
                <div>
                    <b>{title}</b>
                </div>
                <div>
                    {genre}
                </div>
            </div>

            <div className='watched-card-half'>
                <div>
                    {service}
                </div>
                <div>
                    {finalDate}
                </div>
                <div>
                    {rating}⭐️
                </div>
            </div>
        </div>
    )

}

export default WatchedCardPublic;