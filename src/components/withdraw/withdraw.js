import React from "react";

export default class Withdraw extends React.Component {
  inputWithdrawAmount = 0;
  inputWithdrawItem = "";
  getWithdrawAmount = (e) => {
    this.inputWithdrawAmount = parseInt(e.target.value);
  };
  onSubmitHandel = (e) => {
    e.preventDefault();
    if (this.inputWithdrawAmount === 0) {
      alert("Inget e gratis amo walla");
      return;
    }
    console.log(localStorage.getItem("balance"));
    if (
      localStorage.getItem("balance") === null ||
      this.inputWithdrawAmount > parseInt(localStorage.getItem("balance"))
    ) {
      alert("Para knas walla");
      return;
    }

    this.props.getWithdrawNumber(
      this.inputWithdrawAmount,
      this.inputWithdrawItem
    );
  };

  getinputWithdrawItem = (e) => {
    this.inputWithdrawItem = e.target.value;
  };

  render() {
    return (
      <div>
        <h1 className="withdraw-header"> Withdraw </h1>
        <div className="withdraw">
          <form className="withdraw-form" onSubmit={this.onSubmitHandel}>
            <div className="input-container">
              <input
                className="withdraw-input"
                placeholder="Name"
                type="text"
                onChange={this.getinputWithdrawItem}
              />
              <input
                className="withdraw-input"
                placeholder="withdraw-amount"
                type="number"
                onChange={this.getWithdrawAmount}
              />
            </div>
            <div className="submit-container">
              <input
                className="withdraw-submit "
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
