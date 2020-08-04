import React, { useContext, useEffect } from 'react';
import ProductsContext from '../../contexts/products/products.context';

import ProductItem from '../../components/product-item/product-item.component';
import Spinner from '../../components/spinner/spinner.component';

import './products-collection.styles.scss';

const ProductsCollectionPage = ({ match }) => {
  const productsContext = useContext(ProductsContext);

  const { loading, products, getProducts } = productsContext;

  useEffect(() => {
    getProducts(match.params.category);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="collection-page">
        <h2 className="title">{match.params.category}</h2>
        <div className="products-wrapper">
          {products.items.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default ProductsCollectionPage;
