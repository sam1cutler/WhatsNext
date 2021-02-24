import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './Section_Footer/NavBar';
import HeaderBar from './Section_Header/HeaderBar';
import WatchList from './Section_Main/WatchList';


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
    <Route 
      path='/'
      component={WatchList}
    />
  )
  

}

function renderFooter() {

  return (
    <Route 
      path='/'
      component={NavBar}
    />
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
