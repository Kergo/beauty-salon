import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ProductItem from '../product-item/product-item.component';
import CustomButton from '../../button/custom-button/custom-button.component';
import './products-overview.styles.scss';

const ProductsOverview = ({ products }) => {
  let history = useHistory();
  let match = useRouteMatch();

  return (
    <div className="products-overview">
      <CustomButton onClick={() => history.push(`${match.url}/${products.title}`)}>{products.title}</CustomButton>
      {/* <h2 className="title" onClick={() => history.push(`${match.url}/${products.title}`)}>{products.title}</h2> */}
      <div className="overview">
        {products.items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default ProductsOverview;
