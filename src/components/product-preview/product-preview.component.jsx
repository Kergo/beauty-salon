import React, { useContext, useEffect } from 'react';
import ProductsContext from '../../contexts/products/products.context';

import './product-preview.styles.scss';

const ProductPreview = ({match}) => {
  const productsContext = useContext(ProductsContext);

  const { product, getProduct } = productsContext;

  useEffect(() => {
    getProduct(match.params.category, match.params.item);
    // eslint-disable-next-line
  }, [match.params]);
  console.log(product)
  return (
    <div className="product-preview">
      <h1 className="title">{product.name}</h1>
      <div className="preview">
      </div>
    </div>
  );
};

export default ProductPreview;
