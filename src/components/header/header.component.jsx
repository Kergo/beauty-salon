import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CurrentUserContext from '../../contexts/current-user/current-user.context';

import { ReactComponent as Logo } from '../../assets/logo-green-small.svg';

import './header.styles.scss';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  let [cartToggle, setCartToggle] = useState(false);

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
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <span
          onClick={() => {
            setCartToggle((cartToggle = !cartToggle));
          }}
        >
          <CartIcon />
        </span>
      </div>
      {cartToggle ? <CartDropdown /> : null}
    </div>
  );
};

export default Header;
