import './App.css';
import { Route } from 'react-router-dom';

// Header stuff
import HeaderNewUser from './Section_Header/HeaderNewUser';
import HeaderRegisteredUser from './Section_Header/HeaderRegisteredUser';

// Acct mgmt stuff
import LandingPage from './Section_Main/AccountMgmt/LandingPage';
import SignupPage from './Section_Main/AccountMgmt/SignupPage';
import LoginPage from './Section_Main/AccountMgmt/LoginPage';

// Core content stuff
import WatchList from './Section_Main/CoreContent/WatchList';
import AddShowToWatch from './Section_Main/CoreContent/AddForms/AddShowToWatch';
import EditShowToWatch from './Section_Main/CoreContent/EditForms/EditShowToWatch';

import WatchedLog from './Section_Main/CoreContent/WatchedLog';
import AddShowWatched from './Section_Main/CoreContent/AddForms/AddShowWatched';
import EditShowWatched from './Section_Main/CoreContent/EditForms/EditShowWatched';

import FriendsList from './Section_Main/CoreContent/FriendsList';
import FriendPage from './Section_Main/CoreContent/EditForms/FriendPage';
import AddFriend from './Section_Main/CoreContent/AddForms/AddFriend';
import FriendsPublicContainer from './Section_Main/CoreContent/FriendsPublicPages/FriendsPublicContainer';



/* -- Fxns to render header and main screen sections -- */
function renderHeader() {
  return (
    <>
      {['/','/signup','/login'].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          component={HeaderNewUser}
        />
      ))}
      {[
          '/watch-list', '/watch-list/add-show', '/watch-list/edit-show/:showId', 
          '/watched-log','/watched-log/add-show', '/watched-log/edit-show/:showId',
          '/friends', '/friends/:connectionId/:friendId', '/friends/add-friend',
          '/friends/:connectionId/:friendId/watch-list', '/friends/:connectionId/:friendId/watched-log'
        ].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          component={HeaderRegisteredUser}
        />
      ))}
    </>
  )
}

function renderMain() {
  return (
    <>
      <Route 
        path='/'
        exact
        component={LandingPage}
      />
      <Route 
        path='/signup'
        exact
        component={SignupPage}
      />
      <Route 
        path='/login'
        exact
        component={LoginPage}
      />

      <Route 
        path='/watch-list'
        exact
        component={WatchList}
      />
      <Route 
        path='/watch-list/add-show'
        exact
        component={AddShowToWatch}
      />
      <Route 
        path='/watch-list/edit-show/:showId'
        exact
        component={EditShowToWatch}
      />

      <Route 
        path='/watched-log'
        exact
        component={WatchedLog}
      />
      <Route 
        path='/watched-log/add-show'
        exact
        component={AddShowWatched}
      />
      <Route 
        path='/watched-log/edit-show/:showId'
        exact
        component={EditShowWatched}
      />

      <Route 
        path='/friends'
        exact
        component={FriendsList}
      />
      <Route 
        path='/friends/:connectionId/:friendId'
        exact
        component={FriendPage}
      />
      <Route 
        path='/friends/add-friend'
        exact
        component={AddFriend}
      />
      {[
          '/friends/:connectionId/:friendId/watch-list', '/friends/:connectionId/:friendId/watched-log'
        ].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          component={FriendsPublicContainer}
        />
      ))} 
      
      
    </>
  )
}

/* -- Define core app component -- */
function App() {
  return (
    <div className="app-container">
      {renderHeader()}
      {renderMain()}
    </div>
  );
}

export default App;
