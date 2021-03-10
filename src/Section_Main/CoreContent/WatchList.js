import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ToWatchCard from './Cards/ToWatchCard';
import './WatchList.css';
import { FaPlus } from 'react-icons/fa';
import ShowsApiService from '../../services/shows-api-service';
import TokenService from '../../services/token-service';

/*
function orderShowList(showList) {
    showList.sort( function(a, b) {
        const c = a.priority;
        const d = b.priority;
        return c-d
    })
}
*/

// refineShowList is intended to 
//    a) filter by "to-watch" / "watched"
//    b) sort by sthg (currently just priority for this page, eventually variable)
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
            <ToWatchCard 
                key={i}
                cardInfo={activeShow}
            />
        ) 
    })
}

function WatchList() {
    
    // establish showList for component's state
    const [ showList, setShowList ] = useState( [] );

    // define useEffect method responsible for API call
    useEffect( () => {

        const activeUser = TokenService.getUserId();

        ShowsApiService.getShows(activeUser)
            .then( showsResults => {
                setShowList(showsResults);
            })
    }, [] )

    // take the API-drawn, state-stored showList and refine 
    //    (refine = filter for "to-watch" + order as needed)
    const refinedShowList = refineShowList(showList);

    const listOfShows = renderShowList(refinedShowList);

    return (
        <main className='show-list-container'>

            {listOfShows}

            <NavLink 
                to='/watch-list/add-show'    
            >
                <div className='add-button'>
                    <FaPlus />
                </div>
            </NavLink>

        </main>
    )

}

export default WatchList;