
import React from 'react';
import { shallow } from 'enzyme';

import  ProductItem  from './product-item.component';


describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = '10';
  
  beforeEach(() => {
      mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<ProductItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render name prop in NameContainer', () => {
    expect(wrapper.find('.name').text()).toBe(mockName);
  });

  it('should render price prop in PriceContainer', () => {
    const price = wrapper.find('.price').text();
    expect(price).toBe(`€${mockPrice}`);
  });
});