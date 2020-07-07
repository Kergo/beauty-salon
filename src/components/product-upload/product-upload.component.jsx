import React, { Component } from 'react';

import {
  imageUpload,
  createProductDocument,
} from '../../firebase/firebase.utils.js';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { storage } from '../../firebase/firebase.utils.js';

import './product-upload.styles.scss';

class ProductUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      url: '',
      progress: 0,
      error: '',
      name: '',
      price: '',
      description: '',
      ingredients: '',
      usage: '',
      productStorage: '',
      category: '',
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
    } = this.state;

    if (image) {
      const storageRef = await imageUpload(image);
      console.log(storageRef);

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
              .then(url => {
                this.setState({ url });
              });
          }
        );

        createProductDocument({
          name,
          price,
          description,
          ingredients,
          usage,
          productStorage,
          category,
        });
        this.setState({
          image: null,
          url: '',
          progress: 0,
          error: '',
          name: '',
          price: '',
          description: '',
          ingredients: '',
          usage: '',
          productStorage: '',
          category: '',
        });
      } catch (error) {
        console.error(error);
      }

      // const uploadTask = storage.ref(`images/${image.name}`).put(image);

      // uploadTask.on(
      //   'state_changed',
      //   snapshot => {
      //     const progress = Math.round(
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //     );
      //     setProgress(progress);
      //   },
      //   error => {
      //     console.error(error);
      //   },
      //   () => {
      //     storage
      //       .ref('images')
      //       .child(image.name)
      //       .getDownloadURL()
      //       .then(url => {
      //         setUrl(url);
      //         setProgress(0);
      //         setImage(null);
      //         setError('')
      //       });
      //   }
      // );
    } else {
      this.setState({ error: 'Error please choose an image to upload' });
    }

    // const { name, price, imgFile } = this.state;

    // console.log(name);
    // console.log(price);
    // console.log(imgFile);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFile = e => {
    const file = e.target.files[0];
    console.log(file);
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

    console.log('image: ', this.state.image);
  };

  render() {
    const {
      image,
      name,
      price,
      description,
      ingredients,
      usage,
      productStorage,
      category,
    } = this.state;
    return (
      <div className="product-upload">
        <h2 className="title">Add Product</h2>
        <form className="product-upload-form" onSubmit={this.handleSubmit}>
          <div className="product-column">
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
          </div>
          <div className="product-column">
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
          </div>
          <div className="product-column">
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
          </div>
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
              <option name="oil">Oil</option>
              <option name="body">Body</option>
              <option name="hair">Hair</option>
            </select>
            <CustomButton type="submit">Upload</CustomButton>
          </div>
        </form>

        {/* <input type="file" onChange={this.handleFile} />{' '}
      <CustomButton onClick={this.handleSubmit}>Upload</CustomButton>
      <div>
      {this.state.progress > 0 ? <progress value={this.stateprogress} max="100" /> : ''}
      <p>{this.stateerror}</p>
      </div>
    {this.state.url ? <img src={this.state.url} alt=''/> : ''} */}
      </div>
    );
  }
}

export default ProductUpload;
