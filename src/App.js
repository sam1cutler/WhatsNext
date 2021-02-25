import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './Section_Footer/NavBar';
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
      {['/watch-list','/watched-log','/friends'].map(path => (
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

function renderFooter() {
  return (
    <>
      {['/watch-list','/watched-log','/friends'].map(path => (
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



/* -- Define core app component -- */
function App() {
  return (
    <div className="app-container">
      {renderHeader()}
      {renderMain()}
      {renderFooter()}
    </div>
  );
}

export default App;
