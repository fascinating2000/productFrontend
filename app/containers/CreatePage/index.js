/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Input from './Input';

import { changeCost, changeFreight, changeName, changeSKU, addProduct } from './actions';
import { makeSelectFreight, makeSelectCost, makeSelectName, makeSelectSKU } from './selectors';
import Button from "../../components/Button/index";

export class CreatePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  onCreateHandler(sku, name, cost, freight) {
    if (isNaN(parseFloat(cost)) || isNaN(parseFloat(freight))) {
      alert('Invalid Parameters for Cost or Freight');
      return;
    }
    this.props.onProductSubmit(sku, name, cost, freight);
  }

  render() {
    const { sku, name, cost, freight } = this.props;
    return (
      <div>
        <Helmet
          title="Create a Product"
          meta={[
            { name: 'description', content: 'Create a product page.' },
          ]}
        />
        <div>
          <div>SKU:</div>
          <div>
            <Input
              id="sku"
              type="text"
              placeholder="Unique SKU"
              value={sku}
              onChange={this.props.onChangeSKU}
            />
          </div>
          <div>Name:</div>
          <div>
            <Input
              id="name"
              type="text"
              placeholder=""
              value={name}
              onChange={this.props.onChangeName}
            />
          </div>
          <div>Cost:</div>
          <div>
            <Input
              id="cost"
              type="text"
              placeholder=""
              value={cost}
              onChange={this.props.onChangeCost}
            />
          </div>
          <div>Freight:</div>
          <div>
            <Input
              id="freight"
              type="text"
              placeholder=""
              value={freight}
              onChange={this.props.onChangeFreight}
            />
          </div>
          <Button children={'Save'} onClick={() => this.onCreateHandler(sku, name, cost, freight)} />
        </div>
      </div>
    );
  }
}

CreatePage.propTypes = {
  sku: React.PropTypes.string,
  onChangeSKU: React.PropTypes.func,
  name: React.PropTypes.string,
  onChangeName: React.PropTypes.func,
  cost: React.PropTypes.string,
  onChangeCost: React.PropTypes.func,
  freight: React.PropTypes.string,
  onChangeFreight: React.PropTypes.func,
  onProductSubmit: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSKU: (evt) => dispatch(changeSKU(evt.target.value)),
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
    onChangeCost: (evt) => dispatch(changeCost(evt.target.value)),
    onChangeFreight: (evt) => dispatch(changeFreight(evt.target.value)),
    onProductSubmit: (sku, name, cost, freight) => dispatch(addProduct(sku, name, cost, freight)),
  };
}

const mapStateToProps = createStructuredSelector({
  sku: makeSelectSKU(),
  name: makeSelectName(),
  cost: makeSelectCost(),
  freight: makeSelectFreight(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
