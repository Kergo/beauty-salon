import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartProvider from './contexts/cart/cart.provider';
import WishListProvider from './contexts/wish-list/wish-list.provider';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

ReactDOM.render(
  <CartProvider>
    <WishListProvider>
      <BrowserRouter>
        <React.StrictMode>
          <ScrollToTop />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </WishListProvider>
  </CartProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
