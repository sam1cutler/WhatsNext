import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PublicWatchList.css';
import ShowsApiService from '../../../services/shows-api-service';
import ToWatchCardPublic from './ToWatchCardPublic';

function refineShowList(showList) {

    let refinedList = [];
    
    showList.forEach( (activeShow) => {
        if (activeShow.watched === false) {
            refinedList.push(activeShow)
        } 
    })

    //orderShowList(refinedList);

    return refinedList;
}

function renderShowList(showList) {

    return showList.map( (activeShow, i) => {
        return (
            <ToWatchCardPublic 
                key={i}
                cardInfo={activeShow}
            />
        ) 
    })
}

function PublicWatchList() {

    const { friendId } = useParams();
    const [ showsList, setShowsList ] = useState( [] );

    // API call to /shows endpoint to get friend's show info
    useEffect( () => {
        ShowsApiService.getShowsPublic(friendId)
            .then( friendShowsList => {
                setShowsList(friendShowsList);
            })
    }, [friendId] )

    // take the API-drawn, state-stored showList and refine 
    //    (refine = filter for "to-watch" + order as needed)
    const refinedShowList = refineShowList(showsList);

    const listOfShows = renderShowList(refinedShowList);

    return (
        <div>
            {listOfShows}
        </div>
    )

}

export default PublicWatchList;