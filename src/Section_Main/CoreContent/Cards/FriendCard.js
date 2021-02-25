import './FriendCard.css';

function FriendCard(props) {

    const { name, username } = props.friendInfo;

    return (
        <div className='friend-card'>
            <div>
                {name}
            </div>
            <div>
                {username}
            </div>
        </div>
    )

}

export default FriendCard;