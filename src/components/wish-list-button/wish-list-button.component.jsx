import React, { useState, useContext } from 'react';
import { WishListContext } from '../../contexts/wish-list/wish-list.provider';

import './wish-list-button.styles.scss';

const WishListButton = item => {
  const { addWishItem } = useContext(WishListContext);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="wish-list-button">
      <i
        className={hovered ? 'fas fa-heart fa-2x' : 'far fa-heart fa-2x'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={() => addWishItem(item)}
      ></i>
    </div>
  );
};

export default WishListButton;
