import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './Section_Footer/NavBar';
import LandingPage from './Section_Main/AccountMgmt/LandingPage';
import HeaderBar from './Section_Header/HeaderBar';
import WatchList from './Section_Main/CoreContent/WatchList';
import SignupPage from './Section_Main/AccountMgmt/SignupPage';
import LoginPage from './Section_Main/AccountMgmt/LoginPage';
import WatchedLog from './Section_Main/CoreContent/WatchedLog';
import FriendsPage from './Section_Main/CoreContent/FriendsPage';


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
