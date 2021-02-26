import { Route } from 'react-router-dom';
import './CoreContentContainer.css';

import WatchList from './CoreContent/WatchList';
import WatchedLog from './CoreContent/WatchedLog';
import FriendsPage from './CoreContent/FriendsPage';
import AddShowWatched from './CoreContent/AddForms/AddShowWatched';
import AddShowToWatch from './CoreContent/AddForms/AddShowToWatch';
import AddFriend from './CoreContent/AddForms/AddFriend';


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
              <Route 
                path='/watch-list/add-show'
                exact
                component={AddShowToWatch}
              />
              <Route 
                path='/watched-log/add-show'
                exact
                component={AddShowWatched}
              />
              <Route 
                path='/friends/add-friend'
                exact
                component={AddFriend}
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