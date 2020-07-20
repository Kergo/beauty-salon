import React, { useContext, useEffect } from 'react';
import ProductsContext from '../../contexts/products/products.context';

import ProductItem from '../../components/product-item/product-item.component';

import './products-collection.styles.scss';

const ProductsCollectionPage = ({ match }) => {
  const productsContext = useContext(ProductsContext);

  const { products, getProducts } = productsContext;

  console.log(match);

  useEffect(() => {
    getProducts(match.params.category);
    // eslint-disable-next-line
  }, []);
  console.log(products);

  return (
    <div className="collection-page">
      <h2 className="title">{match.params.category}</h2>
      <div className="products-wrapper">
        {products.items.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      {/* <ProductUpload /> */}
    </div>
  );
};

export default ProductsCollectionPage;
