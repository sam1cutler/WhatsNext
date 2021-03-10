import { BsFillStarFill, BsStar } from 'react-icons/bs';

const cardHelpers = {

    renderStarRating(rating) {

        const stars = [0, 0, 0, 0, 0].map((_, i) =>
            (i < rating)
                ? <span key={i}><BsFillStarFill /></span>
                : <span key={i}><BsStar /></span>
        );
        return (
            <div className='rating-div show-card-main-info-half'>
                {stars}
            </div>
        );
    
    },



}

export default cardHelpers;