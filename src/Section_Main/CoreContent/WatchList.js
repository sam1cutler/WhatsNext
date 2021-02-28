import { NavLink } from 'react-router-dom';
import ToWatchCard from './Cards/ToWatchCard';
import './WatchList.css';

import STORE from './store';


function renderShowList(showList) {

    return showList.map( (activeShow, i) => {
        if (activeShow.watched === false) {
            return (
                <ToWatchCard 
                    key={i}
                    cardInfo={activeShow}
                />
            )
        } else {
            return null;
        }
    })

}


function WatchList() {

    const listOfShows = renderShowList(STORE.shows);

    return (
        <main className='show-list-container'>

            {listOfShows}

            <NavLink 
                to='/watch-list/add-show'    
            >
                <div className='add-button'>
                Add show
                </div>
            </NavLink>

        </main>
    )

}

export default WatchList;