import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './Section_Footer/NavBar';
import LandingPage from './Section_Main/AccountMgmt/LandingPage';
import HeaderBar from './Section_Header/HeaderBar';
import WatchList from './Section_Main/CoreContent/WatchList';
import SignupPage from './Section_Main/AccountMgmt/SignupPage';


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
        path='/watch-list'
        exact
        component={WatchList}
      />
      <Route 
        path='/signup'
        exact
        component={SignupPage}
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
