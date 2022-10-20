import React, { Fragment } from "react";
import Deposit from "./components/deposit/deposit";
import Withdraw from "./components/withdraw/withdraw";
export default class App extends React.Component {
  total = 0;

  myArray = localStorage.getItem("myArray")
    ? JSON.parse(localStorage.getItem("myArray"))
    : [];

  getTotalNumber = (total) => {
    console.log(total);
    if (localStorage.getItem("budget")) {
      localStorage.setItem(
        "budget",
        parseInt(localStorage.getItem("budget")) + total
      );
    } else {
      localStorage.setItem("budget", total);
    }
    if (localStorage.getItem("balance")) {
      localStorage.setItem(
        "balance",
        parseInt(localStorage.getItem("balance")) + total
      );
    } else {
      localStorage.setItem("balance", total);
    }
    window.location.reload();
  };
  getWithdrawNumber = (total, item) => {
    console.log(total);
    const obj = {
      Name: item,
      Price: total,
    };
    let checkExist = false;
    this.myArray.forEach((value) => {
      if (value.Name === item) {
        checkExist = true
      } else {
      
      }
    });
    if (checkExist) {
      alert("In this bank you are not allowed to buy two of the same things because we a shit bank")
      return
    }

    this.myArray.push(obj);
    localStorage.setItem("myArray", JSON.stringify(this.myArray));

    if (localStorage.getItem("withdraw")) {
      localStorage.setItem(
        "withdraw",
        parseInt(localStorage.getItem("withdraw")) + total
      );
    } else {
      localStorage.setItem("withdraw", total);
    }
    if (localStorage.getItem("balance")) {
      localStorage.setItem(
        "balance",
        parseInt(localStorage.getItem("balance")) - total
      );
    } else {
      localStorage.setItem("balance", total);
    }
    window.location.reload();
  };

  render() {
    const item = localStorage.getItem("budget")
      ? localStorage.getItem("budget")
      : 0;

    const withdraw = localStorage.getItem("withdraw")
      ? localStorage.getItem("withdraw")
      : 0;

    /*   const itemList = localStorage.getItem("name")
      ? localStorage.getItem("total")
      : 0;
 */
    return (
      <Fragment>
        <Deposit getTotalNumber={this.getTotalNumber}> </Deposit>
        <Withdraw getWithdrawNumber={this.getWithdrawNumber}></Withdraw>

        <h2>
          <div> Withdraw {withdraw}</div>
          <div> Budget {item}</div>
          <div> Balance {item - withdraw} </div>
          {this.myArray.map((value) => {
            return (
              <div className="list">
                <li> {value.Name} </li>
                <li className="list-Price"> {value.Price} </li>
              </div>
            );
          })}
        </h2>
      </Fragment>
    );
  }
}
