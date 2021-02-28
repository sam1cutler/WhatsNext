import './App.css';
import { Route } from 'react-router-dom';

//import NavBar from './Section_Footer/NavBar';
import HeaderBar from './Section_Header/HeaderBar';

import HeaderNewUser from './Section_Header/HeaderNewUser';

import AccountMgmtContainer from './Section_Main/AccountMgmtContainer';
import CoreContentContainer from './Section_Main/CoreContentContainer';


/* -- Fxns to render main screen sections -- */
function renderHeader() {
  return (
    <Route 
      path='/'
      component={HeaderNewUser}
    />
  )
}

function renderMain() {
  return (
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
    /*
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
