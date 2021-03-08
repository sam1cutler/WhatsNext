import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PublicWatchedLog.css';
import ShowsApiService from '../../../services/shows-api-service';
import WatchedCardPublic from './WatchedCardPublic';

function refineShowList(showList) {

    let refinedList = [];
    
    showList.forEach( (activeShow) => {
        if (activeShow.watched === true) {
            refinedList.push(activeShow)
        } 
    })

    //orderShowList(refinedList);

    return refinedList;
}

function renderShowList(showList) {

    return showList.map( (activeShow, i) => {
        return (
            <WatchedCardPublic 
                key={i}
                cardInfo={activeShow}
            />
        ) 
    })
}

function PublicWatchedLog() {

    const { friendId } = useParams();
    const [ showsList, setShowsList ] = useState( [] );

    // API call to /shows endpoint to get friend's show info
    useEffect( () => {
        ShowsApiService.getShows(friendId)
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

export default PublicWatchedLog;