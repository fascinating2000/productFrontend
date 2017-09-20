/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchProducts, removeProduct } from './actions';
import { selectProducts } from './selectors';

import Item from './Item';
import Label from './Label';
import Title from './Title';
import A from './A';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const items = this.props.products.map(function(item) {
      return (<Item key={item.sku}>
        <div>
          <Label>SKU:</Label>
          <Title>{item.sku}</Title>
        </div>
        <div>
          <Label>Name:</Label>
          <Title>{item.name}</Title>
        </div>
        <div>
          <Label>Cost:</Label>
          <Title>{item.cost}</Title>
        </div>
        <div>
          <Label>Freight:</Label>
          <Title>{item.freight}</Title>
        </div>
        <A href={'/edit/'+item.sku}>Edit</A>
        <A href={'/calc/'+item.sku}>Calc</A>
        <A onClick={() => this.props.removeProduct(item.sku)}>Del</A>
      </Item>);
    }.bind(this));

    return (
      <article>

        <div>
          {items}
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  username: React.PropTypes.string,
  fetchProducts: React.PropTypes.func,
  products: React.PropTypes.array,
  editItem: React.PropTypes.func,
  removeItem: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    removeProduct: (sku) => dispatch(removeProduct(sku)),
  };
}

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
