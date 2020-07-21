import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home/home';
import Contact from './Components/Contact/contact';
import Slideshow from './Components/Home/slideshow';
import Navbar from './Components/Navbar/navbar'
import Products from './Components/Products/products';
import Filter from './Components/Filter/filter';

import * as serviceWorker from './serviceWorker';

 this.prodsFilter = () => {
  console.log("Hi!");
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Slideshow />
    <Filter count="12" filterProducts={this.prodsFilter} />
    <Products />
    <Contact />





  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
