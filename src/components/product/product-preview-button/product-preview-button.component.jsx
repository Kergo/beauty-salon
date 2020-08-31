import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './product-preview-button.styles.scss';

const ProductPreviewButton = ({ item }) => {
  let history = useHistory();
  let match = useRouteMatch();
  const { name, category } = item;

  return (
    <div className='product-preview-button'
      onClick={() => {
        if (!match.params.category) {
          history.push(`products/${category}/${name}`);
        } else {
          history.push(`${match.url}/${name}`);
        }
      }}
    >
      <i className="fas fa-info-circle fa-2x"></i>
    </div>
  );
};

export default ProductPreviewButton;
