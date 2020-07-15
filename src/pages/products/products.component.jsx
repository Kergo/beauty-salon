import React, { useContext, useEffect } from 'react';

import ProductsOverview from '../../components/products-overview/products-overview.component';
import ProductsContext from '../../contexts/products/products.context';

import './products.styles.scss';

const ProductsPage = ({ match }) => {
  const productsContext = useContext(ProductsContext);
  const { products, getProducts } = productsContext;
  console.log(getProducts);
  

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // console.log(products)

  return (
    <div className="products-page">
      {/* <h2 className="title">{title}</h2> */}
      <div className="items">
        {products.map(item => (
          <ProductsOverview key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
