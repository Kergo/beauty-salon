import React, { useContext, useEffect } from 'react';
import ProductsContext from '../../contexts/products/products.context';
import {useHistory} from 'react-router-dom'

import ProductItem from '../../components/product/product-item/product-item.component';
import Spinner from '../../components/spinner/spinner.component';

import './products-collection.styles.scss';
import CustomButton from '../../components/button/custom-button/custom-button.component';

const ProductsCollectionPage = ({ match }) => {
  const productsContext = useContext(ProductsContext);

  const { loading, products, getProducts } = productsContext;
  let history  = useHistory()

  useEffect(() => {
    getProducts(match.params.category);
    // eslint-disable-next-line
  }, [match.params.category]);
  //Error handling needed if products are empty
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
        <div className="products-footer">
          <h1>Checkout our other collections</h1>
          <div className='products-footer-buttons'>
            <CustomButton onClick={() => history.push('/products/body')}>Body</CustomButton>
            <CustomButton onClick={() => history.push('/products/hair')}>Hair</CustomButton>
            <CustomButton onClick={() => history.push('/products/face')}>Face</CustomButton>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductsCollectionPage;
