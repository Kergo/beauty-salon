import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../contexts/cart/cart.provider';

import { ReactComponent as Logo } from '../../assets/logo-green-small.svg';

import './header.styles.scss';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);
  const history = useHistory();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/products">
          Products
        </Link>
        <Link className="option" to="/services">
          Services
        </Link>
        <Link className="option" to="/about">
          About Us
        </Link>
        <Link className="option" to="/contacts">
          Contacts
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              history.push('/');
              auth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
        <Link to="/wish-list">
          <i className={'far fa-heart fa-2x'}></i>
        </Link>
        {currentUser && currentUser.role === 'admin' ? (
          <Link className="option" to="/dashboard">
            Dashboard
          </Link>
        ) : null}
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
