import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartProvider from './contexts/cart/cart.provider';
import WishListProvider from './contexts/wish-list/wish-list.provider';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const options = {
  position: positions.MIDDLE,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <CartProvider>
    <WishListProvider>
      <BrowserRouter>
        <React.StrictMode>
          <ScrollToTop />
          <AlertProvider template={AlertTemplate} {...options}>
            <ErrorBoundary>
          <App />
            </ErrorBoundary>
          </AlertProvider>
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
