import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './WatchedCard.css';

function WatchedCard(props) {

    const { id, title, service, genre, completed, rating } = props.cardInfo;

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
                <Link
                    to={`/watched-log/edit-show/${id}`}
                    className='show-card-button'
                >
                    <div >
                        Edit
                    </div>
                </Link>
            </div>
        </div>
    )

}

export default WatchedCard;