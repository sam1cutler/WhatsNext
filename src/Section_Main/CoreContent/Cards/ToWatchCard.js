import './ToWatchCard.css';


function ToWatchCard(props) {

    const { title, service, genre, priority } = props.cardInfo;

    return (

        <div className='to-watch-show-card'>
            <div className='to-watch-show-card-half'>
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

            <div className='to-watch-show-card-half'>
                <div>
                    {priority}
                </div>
                <div className='show-card-button'>
                    Finished it!
                </div>
                <div className='show-card-button'>
                    Edit
                </div>
            </div>
        </div>

    )

}

export default ToWatchCard;