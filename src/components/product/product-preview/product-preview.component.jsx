import React, { useContext, useEffect } from 'react';
import ProductsContext from '../../../contexts/products/products.context';
import { CartContext } from '../../../contexts/cart/cart.provider';
import CustomButton from '../../button/custom-button/custom-button.component';
import Spinner from '../../spinner/spinner.component';

import './product-preview.styles.scss';

const ProductPreview = ({ match }) => {
  const productsContext = useContext(ProductsContext);

  const { loading, product, getProduct } = productsContext;
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProduct(match.params.category, match.params.item);
    // eslint-disable-next-line
  }, [match.params]);
  // console.log(product);
  const {
    name,
    imageUrl,
    description,
    size,
    usage,
    productStorage,
    price,
    ingredients,
  } = product;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="product-preview">
        <div className="product-preview__image-box">
          <div
            className="product-preview__image"
            style={{
              backgroundImage: `url(${imageUrl}), url('https://i.ya-webdesign.com/images/blank-price-tag-png-3.png')`,
            }}
          />
          <br></br>
          <p className="product-preview__ingredients">
            <b>Ingredients:</b>
            <br></br>
            {ingredients}
          </p>
        </div>
        <div className="product-preview__info-box">
          <h1 className="title">{name}</h1>
          <div className="product-preview__description-box">
            <div className="product-preview__description--size-price">
              <p className="product-preview__description--size">
                Size <br></br>
                {size} ml
              </p>
              <p>
                Price <br></br>€{price}
              </p>
            </div>
            <p className="product-preview__description--text">{description}</p>
          </div>
          <CustomButton onClick={() => addItem(product)}>
            Add to cart
          </CustomButton>
          <p className="product-preview__usage">
            <b>Usage:</b>
            <br></br>
            {usage}
          </p>
          <span>
            <b>Storage:</b>
            <br></br>
            {productStorage}
          </span>
          <br></br>
          {/* <span>
          We are working hard to keep our staff safe, so there may be a slight
          delay in deliveries.
        </span> */}
        </div>
        <div className="preview"></div>
      </div>
    );
  }
};

export default ProductPreview;
