import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import WatchedCard from './Cards/WatchedCard';
import './WatchedLog.css';
import { FaPlus } from 'react-icons/fa';
import ShowsApiService from '../../services/shows-api-service';

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

function renderWelcome() {

    return (
        <div className='watch-list-welcome-message form-backing'>
            <h2>No watched shows?</h2>
            <p>Either finish a show on your Watch List...</p>
            <div className='add-watched-show-message form-backing'>
                <p>...or add a show directly to your Watched Log.</p>
            </div>
            <div className='add-watched-show-pointer'>
                ➞
            </div>
            
        </div>
    )

}

function WatchedLog() {

    // establish showList for component's state
    const [ showList, setShowList ] = useState( [] );

    // define useEffect method responsible for API call
    useEffect( () => {

        ShowsApiService.getShows()
            .then( showsResults => {
                const filteredResults = refineShowList(showsResults)
                setShowList(filteredResults);
            })
    }, [] )

    // Render either showListDisplay or a welcome message
    const showListDisplay = 
        (showList.length > 0)
            ? renderShowList(showList)
            : renderWelcome()

    return (

        <main className='show-list-container'>

            {showListDisplay}

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