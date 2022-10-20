import React from "react";

export default class Deposit extends React.Component {
  inputDepositAmount = 0;
  total = 0;
  getDepositAmount = (e) => {
    this.inputDepositAmount = parseInt(e.target.value);
  };
  onSubmitHandel = (e) => {
    e.preventDefault();
    this.total = this.total + this.inputDepositAmount;
    this.props.getTotalNumber(this.total);
  };
  render() {
    return (
      <div>
        <h1 className="deposit-header"> Deposit </h1>
        <div className="deposit">
          <form className="deposit-form" onSubmit={this.onSubmitHandel}>
            {console.log(this.props)}
            <input
              className="deposit-input"
              placeholder="deposit-amount"
              type="number"
              onChange={this.getDepositAmount}
            />
            <div className="deposit-container"></div>
            <input className="deposit-submit " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
