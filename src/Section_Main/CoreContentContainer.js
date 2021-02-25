import { Route } from 'react-router-dom';
import './CoreContentContainer.css';

import WatchList from './CoreContent/WatchList';
import WatchedLog from './CoreContent/WatchedLog';
import FriendsPage from './CoreContent/FriendsPage';


function CoreContentContainer() {

    function renderCoreContentScreens() {

        return (
            <>
              <Route 
                path='/watch-list'
                exact
                component={WatchList}
              />
              <Route 
                path='/watched-log'
                exact
                component={WatchedLog}
              />
              <Route 
                path='/friends'
                exact
                component={FriendsPage}
              />
            </>
          )

    }

    return (
        <main className='core-content-container'>
            {renderCoreContentScreens()}
        </main>
    )

}

export default CoreContentContainer;