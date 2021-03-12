import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PublicWatchList.css';
import ShowsApiService from '../../../services/shows-api-service';
import ToWatchCardPublic from '../Cards/ToWatchCardPublic';

function refineShowList(showList) {

    let refinedList = [];
    
    showList.forEach( (activeShow) => {
        if (activeShow.watched === false) {
            refinedList.push(activeShow)
        } 
    })

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


function renderNoShows() {
    return (
        <div className='watch-list-welcome-message'>
            <h2>No shows in this friend's watch list!</h2>
        </div>
    )
}

function PublicWatchList() {

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

export default PublicWatchList;