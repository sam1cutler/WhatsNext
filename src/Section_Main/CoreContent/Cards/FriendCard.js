//import { Link } from 'react-router-dom';
import './FriendCard.css';

function FriendCard(props) {

    const { recipient_name } = props.friendInfo;

    return (
        <div className='friend-card'>
            <div className='friend-card-element'>
                <p><b>{recipient_name}</b></p>
            </div>
        </div>
    )

}

export default FriendCard;