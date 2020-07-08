import React, { Component } from 'react';
import { getAllProductsDocuments } from '../../firebase/firebase.utils';

export class ProductsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getData = async () => {
    const data = await getAllProductsDocuments();
    console.log(typeof data);
    this.setState({ ...data });
    console.log(this.state.data);
    
  };

  componentDidMount() {
    this.getData();
    
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

export default ProductsOverview;
