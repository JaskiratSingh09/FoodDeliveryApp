import React from "react";
import { Dispatchfunc, Statefunc } from "./ReduxApi";

export default function Cart() {
  let data = Statefunc();
  let dispatch = Dispatchfunc();
  let TotalBill = 0;

  if (!data || data.length === 0)
    return (
      <div>
        <h1>ADD ITEM TO CART</h1>
      </div>
    );

  return (
    <div className="cart-container">
      <table className="table caption-top">
        <caption>
          <h3>Your Order</h3>
        </caption>
        <thead>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">NAME</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            TotalBill += value.Total;
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{value.Name}</td>
                <td>{value.quantity}</td>
                <td>{value.Total}</td>
                <td>
                  <i
                    className="fa fa-trash"
                    style={{ color: "black" }}
                    onClick={async () => {
                      await dispatch({ Type: "REMOVE", index: index });
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">
        <h5>Total - {TotalBill}</h5>
      </div>
    </div>
  );
}
