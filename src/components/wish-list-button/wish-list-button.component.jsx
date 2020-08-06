import React, { useContext } from 'react';
import { WishListContext } from '../../contexts/wish-list/wish-list.provider';

import './wish-list-button.styles.scss';

const WishListButton = item => {
  const { wished, toggleWished } = useContext(WishListContext);

  // const [hovered, setHovered] = useState(false);
  // const toggleHover = () => setHovered(!hovered);

  return (
    <i
      className={`wish-list-button ${!wished ? 'fas ' : 'far '} fa-heart fa-2x`}
      onMouseEnter={toggleWished}
      onMouseLeave={toggleWished}
      {...item}
    ></i>
  );
};

export default WishListButton;
