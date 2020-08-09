import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import { ReactComponent as Logo } from '../../assets/logo-green-small.svg';
import './appointment-popup.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import DatePicker from 'react-datepicker';

import { registerLocale } from 'react-datepicker';

import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('en-GB', enGB);

class AppointmentPopup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      type: '',
      startDate: new Date(),
    };
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleDate = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
      console.log(this.props.history);
      
    return (
      <div className="popup">
        <div className="popup__content">
          <div className="popup__content--head">
            <Link className="logo-container" to="/">
              <Logo className="logo" />
            </Link>
            <i className="fas fa-times fa-2x" onClick={() => this.props.history.goBack()}></i>
          </div>
          <div className="popup__content--header">
            <h2>Make an appointment at The Ugly Duckling</h2>
            <h4>Every procedure is a beautiful experience</h4>
          </div>
          <div className="popup__content--form">
            <form>
              <div className="popup__content--form-body">

              <FormInput
                id="name"
                type="text"
                name="name"
                label="Name and Surname"
                value={this.state.name}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                type="text"
                name="phone"
                label="Phone"
                value={this.state.phone}
                handleChange={this.handleChange}
                required
              />
              </div>
              <div className="popup__content--form-body">

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
                name="type"
                label="I would like to make an appointment for:"
                value={this.state.type}
                handleChange={this.handleChange}
                required
              />
              </div>
              <div className="popup__content--form-footer">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDate}
                  showTimeSelect
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  minDate={new Date()}
                  inline
                  showDisabledMonthNavigation
                  locale="en-GB"
                  placeholderText="Click to select a date and time"
                  dateFormat="d MMMM, yyyy hh:mm"
                />
                <CustomButton>Make an appointment</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentPopup;
