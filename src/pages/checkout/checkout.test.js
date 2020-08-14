import React from 'react';
import { shallow } from 'enzyme';
import  CheckoutPage from './checkout.component';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    cartTotal: 100
  };

  wrapper = shallow(<CheckoutPage {...mockProps} />);
});

it('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});