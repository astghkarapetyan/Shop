import React,{ Suspense,lazy} from 'react';
import  { Switch,Route,withRouter } from 'react-router';
import Header from './components/header';
import MainPage from './components/main-page';
import Footer from './components/footer';
import Login from './components/login';
import Loading from './components/loading';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductsPage = lazy(()=>import('./components/products-page'));
const ProductDetail = lazy(()=>import('./components/productDetail'));
function App({location}) {
  return (
    <div className="App">
        <Header/>
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route exact path='/' component={MainPage}  />
                <Route exact path='/account/login' component={Login}  />
                <Route exact path='/account/register' component={Register}  />
                <Route exact path='/collections/:name' component={ProductsPage}  />
                <Route exact path='/collections/:name/products/:dName' component={ProductDetail} />
            </Switch>
            {
                location.pathname !== '/' && <Footer/>
            }
        </Suspense>
    </div>
  );
}

export default withRouter(App);



//
// let scrolled = $(window).scrollTop();
// let windowHeight = $(window).height();
//
// function animEach(isLoading){
//     $('[class ^= "animate-"]').each(function () {
//         $(this).children().each(function (i) {
//             if(isLoading){
//                 $(this).css("transition-delay", 0.2 * (i - 1) + "s");
//             }
//             let itemOffsetTop = $(this).offset().top;
//             let itemHeight = $(this).height();
//             if (itemOffsetTop - scrolled < windowHeight - 30 && itemOffsetTop - scrolled + itemHeight > 30) {
//                 $(this).addClass("complete");
//             }
//         });
//     });
// }
// animEach(true);
//
// $(window).scroll(function () {
//     scrolled = $(this).scrollTop();
//     animEach(false);
// });