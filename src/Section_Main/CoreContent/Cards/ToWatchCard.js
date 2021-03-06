import { NavLink } from 'react-router-dom';
import './ToWatchCard.css';


function ToWatchCard(props) {

    const { id, title, service, genre, priority } = props.cardInfo;

    return (

        <div className='to-watch-show-card'>
            <div className='to-watch-show-card-half'>
                <div>
                    {service}
                </div>
                <div>
                    <b>{title}</b>
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
                <NavLink
                    to={`/watch-list/edit-show/${id}`}
                    className='show-card-button'
                >
                    <div >
                        Edit
                    </div>
                </NavLink>
            </div>
        </div>

    )

}

export default ToWatchCard;