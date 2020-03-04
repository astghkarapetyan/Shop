import React from 'react';
import  { Switch,Route,withRouter } from 'react-router';
import Header from './components/header';
import MainPage from './components/main-page';
import ProductsPage from './components/products-page';
import ProductDetail from './components/productDetail';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App({location}) {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path='/' component={MainPage}  />
            <Route exact path='/collections/:name' component={ProductsPage}  />
            <Route exact path='/collections/:name/products/:dName' component={ProductDetail} />
        </Switch>
        {
            location.pathname !== '/' && <Footer/>
        }
    </div>
  );
}

export default withRouter(App);
