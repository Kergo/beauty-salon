import React, { useContext, useEffect } from 'react';

import ProductsOverview from '../../components/products-overview/products-overview.component';
import Spinner from '../../components/spinner/spinner.component';
import ProductsContext from '../../contexts/products/products.context';

import './products.styles.scss';

const ProductsPage = () => {
  const productsContext = useContext(ProductsContext);
  const {
    loading,
    productsCollection,
    getProductsCollection,
  } = productsContext;

  useEffect(() => {
    getProductsCollection();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="products-page">
        <div className="items">
          {productsCollection.map(item => (
            <ProductsOverview key={item.id} products={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default ProductsPage;
