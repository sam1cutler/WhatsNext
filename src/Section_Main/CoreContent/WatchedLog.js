import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import WatchedCard from './Cards/WatchedCard';
import './WatchedLog.css';
import { FaPlus } from 'react-icons/fa';
import ShowsApiService from '../../services/shows-api-service';
import TokenService from '../../services/token-service';

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
        if (activeShow.watched === true) {
            return (
                <WatchedCard 
                    key={i}
                    cardInfo={activeShow}
                />
            )
        } else {
            return null;
        }
    })

}

function WatchedLog() {

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
                to='/watched-log/add-show'    
            >
                <div className='add-button'>
                    <FaPlus />
                </div>
            </NavLink>

        </main>

    )

}

export default WatchedLog;