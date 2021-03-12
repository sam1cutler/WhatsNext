import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PublicWatchedLog.css';
import ShowsApiService from '../../../services/shows-api-service';
import WatchedCardPublic from '../Cards/WatchedCardPublic';

function orderShowList(showList) {
    showList.sort( function(a, b) {
        const c = new Date(a.completed);
        const d = new Date(b.completed);
        return d-c
    })
}

function refineShowList(showList) {

    let refinedList = [];
    
    showList.forEach( (activeShow) => {
        if (activeShow.watched === true) {
            refinedList.push(activeShow)
        } 
    })

    orderShowList(refinedList);

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

function renderNoShows() {
    return (
        <div className='watch-list-welcome-message'>
            <h2>No shows in this friend's watched log!</h2>
        </div>
    )
}

function PublicWatchedLog(props) {

    const { friendId } = useParams();
    const [ showsList, setShowsList ] = useState( [] );

    // API call to /shows endpoint to get friend's show info
    useEffect( () => {
        ShowsApiService.getShowsPublic(friendId)
            .then( friendShowsList => {
                const filteredResults = refineShowList(friendShowsList)
                setShowsList(filteredResults);
            })
    }, [friendId] )

    // Render either showListDisplay or a welcome message
    const showListDisplay = 
        (showsList.length > 0)
            ? renderShowList(showsList)
            : renderNoShows()

    return (
        <div>
            {showListDisplay}
        </div>
    )

}

export default PublicWatchedLog;