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
import InputSection from './InputSection';

import { changeCost, changeFreight, changeName, changeSKU, changePrice, fetchProduct } from './actions';
import { makeSelectFreight, makeSelectCost, makeSelectName, makeSelectSKU, makeSelectPrice } from './selectors';

export class CalcPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  componentWillMount() {
    this.props.fetchProduct(this.props.params.id);
  }

  render() {
    const { sku, name, cost, freight, price } = this.props;
    const landCost = parseFloat(cost) + parseFloat(freight);
    const fee = parseFloat(Math.max(parseFloat(cost) * 0.12, 1));
    const totalCost = landCost + fee;
    const profit = !isNaN(parseFloat(price)) ? parseFloat(price) - totalCost : 0;
    const profitMargin = !isNaN(parseFloat(price)) ? profit / parseFloat(price) : 0;
    return (
      <div>
        <Helmet
          title="Create a Product"
          meta={[
            { name: 'description', content: 'Create a product page.' },
          ]}
        />
        <InputSection>
          <div>SKU:</div>
          <div>
            <Input
              id="sku"
              type="text"
              disabled
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
              disabled
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
              disabled
              placeholder=""
              value={cost}
              onChange={this.props.onChangeCost}
            />
          </div>
          <div>Freight:</div>
          <div>
            <Input
              id="freight"
              disabled
              type="text"
              placeholder=""
              value={freight}
              onChange={this.props.onChangeFreight}
            />
          </div>
          <div>Price:</div>
          <div>
            <Input
              id="price"
              type="text"
              placeholder=""
              value={price}
              onChange={this.props.onChangePrice}
            />
          </div>
        </InputSection>
        <InputSection>
          <div>Landed Cost:</div>
          <div>
            <Input
              id="sku"
              type="text"
              disabled
              placeholder="Unique SKU"
              value={landCost}
              onChange={this.props.onChangeSKU}
            />
          </div>
          <div>Selling Fee:</div>
          <div>
            <Input
              id="name"
              type="text"
              disabled
              placeholder=""
              value={fee}
              onChange={this.props.onChangeName}
            />
          </div>
          <div>Total Cost:</div>
          <div>
            <Input
              id="cost"
              type="text"
              disabled
              placeholder=""
              value={totalCost}
              onChange={this.props.onChangeCost}
            />
          </div>
          <div>Profit:</div>
          <div>
            <Input
              id="freight"
              disabled
              type="text"
              placeholder=""
              value={profit}
              onChange={this.props.onChangeFreight}
            />
          </div>
          <div>Profit Margin:</div>
          <div>
            <Input
              id="price"
              type="text"
              placeholder=""
              value={profitMargin}
              onChange={this.props.onChangePrice}
            />
          </div>
        </InputSection>
      </div>
    );
  }
}

CalcPage.propTypes = {
  sku: React.PropTypes.string,
  onChangeSKU: React.PropTypes.func,
  name: React.PropTypes.string,
  onChangeName: React.PropTypes.func,
  cost: React.PropTypes.number,
  onChangeCost: React.PropTypes.func,
  freight: React.PropTypes.number,
  onChangeFreight: React.PropTypes.func,
  price: React.PropTypes.string,
  onChangePrice: React.PropTypes.func,
  fetchProduct: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSKU: (evt) => dispatch(changeSKU(evt.target.value)),
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
    onChangeCost: (evt) => dispatch(changeCost(evt.target.value)),
    onChangeFreight: (evt) => dispatch(changeFreight(evt.target.value)),
    onChangePrice: (evt) => dispatch(changePrice(evt.target.value)),
    fetchProduct: (sku) => dispatch(fetchProduct(sku)),
  };
}

const mapStateToProps = createStructuredSelector({
  sku: makeSelectSKU(),
  name: makeSelectName(),
  cost: makeSelectCost(),
  freight: makeSelectFreight(),
  price: makeSelectPrice(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(CalcPage);
