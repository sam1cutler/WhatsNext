import './ToWatchCardPublic.css';

function ToWatchCardPublic(props) {

    const { title, service, genre } = props.cardInfo;

    return (

        <div className='to-watch-show-card'>
            <div className='to-watch-show-card-public-top'>
                
                <div>
                    <b>{title}</b>
                </div>
                
            </div>

            <div className='to-watch-show-card-half'>
                <div>
                    {service}
                </div>
                <div>
                    {genre}
                </div>
                
            </div>
        </div>

    )

}

export default ToWatchCardPublic;