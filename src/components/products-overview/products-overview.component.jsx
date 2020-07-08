import React, { Component } from 'react';
import { getProductsDocuments } from '../../firebase/firebase.utils';

export class ProductsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const products = await getProductsDocuments('face');
    console.log(products.data());

    // this.setState({ data: products.data().items });
  }
  render() {
    return <div>{this.state.data.items}</div>;
  }
}

export default ProductsOverview;
