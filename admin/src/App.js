import React from 'react';
import  { Switch,Route,withRouter } from 'react-router';
import Header from  './components/header';
import Navbar from  './components/navbar';
import AddGlasses from './components/content/add-products';
import AllProducts from './components/content/all-products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const  App = ({location})=> {
  return (
    <div className="App">
        {
            location.pathname !== '/login' ? (
                <>
                    <Header/>
                    <div className='app-container'>
                        <Navbar/>
                        <Switch>
                            <Route exact path='/add-glasses' component={AddGlasses}  />
                            <Route exact path='/products' component={AllProducts}  />
                        </Switch>
                    </div>

                </>
            ):(
                <div>Login</div>
            )
        }

    </div>
  );
};

export default withRouter(App);
