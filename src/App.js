import './App.css';
import { Route } from 'react-router-dom';

import HeaderNewUser from './Section_Header/HeaderNewUser';
import HeaderRegisteredUser from './Section_Header/HeaderRegisteredUser';

import LandingPage from './Section_Main/AccountMgmt/LandingPage';
import SignupPage from './Section_Main/AccountMgmt/SignupPage';
import LoginPage from './Section_Main/AccountMgmt/LoginPage';
import WatchList from './Section_Main/CoreContent/WatchList';
import WatchedLog from './Section_Main/CoreContent/WatchedLog';
import FriendsPage from './Section_Main/CoreContent/FriendsPage';
import AddShowWatched from './Section_Main/CoreContent/AddForms/AddShowWatched';
import AddShowToWatch from './Section_Main/CoreContent/AddForms/AddShowToWatch';
import AddFriend from './Section_Main/CoreContent/AddForms/AddFriend';


/* -- Fxns to render main screen sections -- */
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
          '/watch-list', '/watch-list/add-show',
          '/watched-log','/watched-log/add-show', 
          '/friends', '/friends/add-friend',
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

    /*
    <main>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
        <div className='tinker-div1'>
          HERE IS THE MAIN SECTION
        </div>
      </main>
    
    
    <>
      {['/','/signup','/login'].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          component={AccountMgmtContainer}
        />
      ))}
      {[
          '/watch-list', '/watch-list/add-show',
          '/watched-log','/watched-log/add-show', 
          '/friends', '/friends/add-friend',
        ].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          component={CoreContentContainer}
        />
      ))}
    </>
    */
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
