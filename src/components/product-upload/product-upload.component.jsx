import React, { Component } from 'react';

import {
  createProductDocument,
  storage,
} from '../../firebase/firebase.utils.js';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './product-upload.styles.scss';

class ProductUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageUrl: '',
      progress: 0,
      error: '',
      name: '',
      price: '',
      description: '',
      ingredients: '',
      usage: '',
      productStorage: '',
      size: '',
      category: 'face',
      gender: 'men',
    };
  }  

  handleSubmit = async e => {
    e.preventDefault();
    const {
      image,
      name,
      price,
      description,
      ingredients,
      usage,
      productStorage,
      category,
      gender,
      size,
    } = this.state;

    if (image) {
      const storageRef = await storage.ref(`images/${image.name}`).put(image);

      try {
        storageRef.task.on(
          'state_changed',
          snapshot => {},
          error => {
            console.error(error);
          },
          () => {
            storage
              .ref('images')
              .child(image.name)
              .getDownloadURL()
              .then(imageUrl => {
                this.setState({ imageUrl });
                createProductDocument({
                  name,
                  price: Number(price),
                  description,
                  ingredients,
                  usage,
                  productStorage,
                  category,
                  gender,
                  size: Number(size),
                  imageUrl,
                });
              })
              .then(() =>
                this.setState({
                  image: null,
                  imageUrl: '',
                  progress: 0,
                  error: '',
                  name: '',
                  price: '',
                  description: '',
                  ingredients: '',
                  usage: '',
                  productStorage: '',
                  size: '',
                  category: 'face',
                  gender: 'men',
                })
              );
          }
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({ error: 'Error please choose an image to upload' });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFile = e => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file['type'];
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (validImageTypes.includes(fileType)) {
        this.setState({ image: file });
        this.setState({ error: '' });
      } else {
        this.setState({ error: 'Please select an image to upload' });
      }
    }
  };

  render() {
    const {
      name,
      price,
      description,
      ingredients,
      usage,
      productStorage,
      size,
      category,
      gender,
    } = this.state;
    
    return (
      <div className="product-upload">
        <h2 className="title">Add Product</h2>
        <form className="product-upload-form" onSubmit={this.handleSubmit}>
          <FormInput
            className="form-input"
            type="text"
            name="name"
            value={name}
            label="Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            className="form-input"
            type="text"
            name="price"
            value={price}
            label="Price"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="description"
            value={description}
            label="Description"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="ingredients"
            value={ingredients}
            label="Ingredients"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="usage"
            value={usage}
            label="Usage"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="productStorage"
            value={productStorage}
            label="Storage"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="text"
            name="size"
            value={size}
            label="Size"
            onChange={this.handleChange}
            required
          />
          <input
            className="custom-button"
            type="file"
            name="image"
            onChange={this.handleFile}
            required
          />
          <div className="product-column">
            <select
              className="custom-button"
              name="category"
              value={category}
              onChange={this.handleChange}
            >
              <option name="face">face</option>
              <option name="body">body</option>
              <option name="hair">hair</option>
            </select>
            <select
              className="custom-button"
              name="gender"
              value={gender}
              onChange={this.handleChange}
            >
              <option name="men">men</option>
              <option name="women">women</option>
            </select>
          </div>
          <CustomButton type="submit">Upload</CustomButton>
        </form>

        {/* <input type="file" onChange={this.handleFile} />{' '}
      <CustomButton onClick={this.handleSubmit}>Upload</CustomButton>
      <div>
      {this.state.progress > 0 ? <progress value={this.stateprogress} max="100" /> : ''}
      <p>{this.stateerror}</p>
      </div> */}
        {/* {this.state.url ? <img src={this.state.url} alt=''/> : ''} */}
      </div>
    );
  }
}

export default ProductUpload;
