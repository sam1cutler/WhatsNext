import './ToWatchCard.css';


function ToWatchCard(props) {

    const { title, service, genre } = props.cardInfo;

    return (

        <div className='show-card'>
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

    )

}

export default ToWatchCard;