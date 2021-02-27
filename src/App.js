import './App.css';
import { Route } from 'react-router-dom';

//import NavBar from './Section_Footer/NavBar';
import HeaderBar from './Section_Header/HeaderBar';
import AccountMgmtContainer from './Section_Main/AccountMgmtContainer';
import CoreContentContainer from './Section_Main/CoreContentContainer';


/* -- Fxns to render main screen sections -- */
function renderHeader() {
  return (
    <Route 
      path='/'
      component={HeaderBar}
    />
  )
}

function renderMain() {
  return (
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
  )
}

/*
function renderNav() {
  return (
    <>
      {[
          '/watch-list', '/watch-list/add-show',
          '/watched-log','/watched-log/add-show', 
          '/friends', '/friends/add-friend',
        ].map(path => (
        <Route 
          exact
          key={path}
          path={path}
          component={NavBar}
        />
      ))}
    </>
  )
}
*/



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
