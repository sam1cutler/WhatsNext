import './WatchedCard.css';

function WatchedCard(props) {

    const { title, service, genre, completed, rating } = props.cardInfo;

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
                    {completed}
                </div>
                <div>
                    {rating}⭐️
                </div>

            </div>
                

        </div>
    )

}

export default WatchedCard;