import { Route } from 'react-router-dom';
import './AccountMgmtContainer.css';
import LandingPage from './AccountMgmt/LandingPage';
import SignupPage from './AccountMgmt/SignupPage';
import LoginPage from './AccountMgmt/LoginPage';

function AccountMgmtContainer() {

    function renderAccountMgmtScreens() {

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
            </>
        )
    }

    return (
        <main className='acct-mgmt-container'>
            {renderAccountMgmtScreens()}
        </main>
    )

}

export default AccountMgmtContainer;