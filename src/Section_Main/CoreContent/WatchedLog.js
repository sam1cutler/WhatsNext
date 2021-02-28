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

        <main className='show-list-container'>

            {listOfShows}

            <NavLink 
                to='/watched-log/add-show'    
            >
                <div className='add-button'>
                    Add show
                </div>
            </NavLink>

        </main>

    )

}

export default WatchedLog;