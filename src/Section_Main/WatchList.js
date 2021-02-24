import './WatchList.css';


function WatchList() {

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

        </main>
    )

}

export default WatchList;