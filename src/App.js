import React from 'react';
import  { Switch,Route } from 'react-router';
import Header from './components/header';
import MainPage from './components/main-page';
import ProductsPage from './components/products-page'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path='/' component={MainPage}  />
            <Route exact path='/collections/:name' component={ProductsPage}  />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
