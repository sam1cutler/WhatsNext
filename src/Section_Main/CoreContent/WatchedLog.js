import { NavLink } from 'react-router-dom';
import WatchedCard from './Cards/WatchedCard';
import './WatchedLog.css'

import STORE from './store';

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

    const listOfShows = renderShowList(STORE.shows)

    return (

        <div className='show-list-container'>

            {listOfShows}

            <NavLink 
                to='/add-show'    
            >
                <div className='add-button'>
                    Add show
                </div>
            </NavLink>

        </div>

    )

}

export default WatchedLog;