import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ToWatchCard from './Cards/ToWatchCard';
import './WatchList.css';
import { FaPlus } from 'react-icons/fa';
import ShowsApiService from '../../services/shows-api-service';
//import tvEmoji from '../../images/television3.png';


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
            <ToWatchCard 
                key={i}
                cardInfo={activeShow}
            />
        ) 
    })
}

function renderWelcome() {

    return (
        <div className='watch-list-welcome-message first-welcome form-backing'>
            <h2>Welcome to <br /> What's Next!</h2>
            <p>To get started...</p>
            <div className='add-show-message form-backing'>
                <p>...add a show to your Watch-List!</p>
            </div>
            <div className='add-show-pointer'>
                ➞
            </div>
            
        </div>
    )

}

function WatchList() {

    
    
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