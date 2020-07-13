import React from 'react';
import './product-preview.styles.scss';

const ProductPreview = ({ title, items }) => {
  console.log(items)
  return (
    <div className="product-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
      </div>
    </div>
  );
};

export default ProductPreview;
