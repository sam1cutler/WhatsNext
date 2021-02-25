import ToWatchCard from './ShowCards/ToWatchCard';
import './WatchList.css';

import STORE from './store';


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

    const listOfShows = renderShowList(STORE.shows);

    return (
        <main className='show-list-container'>

            <div className='show-card'>
                <div>
                    Netflix
                </div>
                <div>
                    Queen's Gambit
                </div>
                <div>
                    Drama
                </div>
            </div>

            <div className='show-card'>
                <div>
                    HBO Max
                </div>
                <div>
                    The Watchmen
                </div>
                <div>
                    SciFi
                </div>
            </div>

            <div className='show-card'>
                <div>
                    Hulu
                </div>
                <div>
                    Atlanta
                </div>
                <div>
                    Drama
                </div>
            </div>

            <div className='show-card'>
                <div>
                    Amazon Prime
                </div>
                <div>
                    Trapped
                </div>
                <div>
                    Crime
                </div>
            </div>

            <div className='add-button'>
            Add show
            </div>

            {listOfShows}

        </main>
    )

}

export default WatchList;