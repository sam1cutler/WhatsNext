import { format } from 'date-fns';
import './WatchedCard.css';

function WatchedCard(props) {

    const { title, service, genre, completed, rating } = props.cardInfo;

    const interimDate = new Date(completed);
    const finalDate = format(interimDate, 'MMM yyyy');

    return (
        <div className='watched-show-card'>
            <div className='watched-card-half'>
                <div>
                    {service}
                </div>
                <div>
                    {title}
                </div>
                <div>
                    {genre}
                </div>
            </div>

            <div className='watched-card-half'>
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

export default WatchedCard;