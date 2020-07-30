import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './contact-form.styles.scss';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      subject: '',
      message: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, name, subject, message } = this.state;

    try {
      this.setState({ email: '', name: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="contact-form">
        <h2>Get in Touch With Us</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="subject"
            value={this.state.subject}
            handleChange={this.handleChange}
            label="Subject"
            required
          />
          <textarea
            className="message"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Your Message"
            required
          />
          <CustomButton type="submit"> Send </CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactForm;
