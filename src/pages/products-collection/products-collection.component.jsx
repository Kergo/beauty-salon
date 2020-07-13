import React from 'react';

import ProductItem from '../../components/product-item/product-item.component';

import './products-collection.styles.scss';

const ProductsCollectionPage = ({ match, category }) => {
  // const productsContext = useContext(ProductsContext);

  // const { products } = productsContext;
  console.log(category);

  console.log(match);

  // useEffect(() => {
  //   getProducts();
  //   // eslint-disable-next-line
  // }, []);
  return (
    <div className="collection-page">
      <h2 className='title'>{category.title}</h2>
      <div>
        {category.items.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      {/* <ProductUpload /> */}
    </div>
  );
};

export default ProductsCollectionPage;
