import React, { useRef, useState, useEffect } from "react";
import { Dispatchfunc } from "./ReduxApi";
export default function Card(props) {
  let dispatch = Dispatchfunc();
  // const data = Statefunc();
  const [quant, setquant] = useState(1);
  const [size, setsize] = useState("");

  const options = props.sizes;
  const keys = Object.keys(options);
  const priceref = useRef();

  const HandleClick = async () => {
    await dispatch({
      Type: "ADD",
      id: props.id,
      img: props.img,
      Name: props.Name,
      quantity: quant,
      Total: Totalprize,
    });
  };

  useEffect(() => {
    setsize(priceref.current.value);
  }, []);

  let Totalprize = quant * parseInt(options[size]);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.img}
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <div style={{ backgroundColor: "black" }} className="card-body">
          <h5 className="card-title" style={{ color: "whitesmoke" }}>
            {props.Name}
          </h5>
          <div className="d-flex">
            <select
              style={{ margin: "3px 3px", height: "50px" }}
              className="btn bg-warning"
              onChange={(e) => {
                setquant(e.target.value);
              }}
            >
              {Array.from({ length: 6 }, (e, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <select
              ref={priceref}
              style={{ margin: "3px 3px", height: "50px" }}
              className="btn bg-danger"
              onChange={(e) => {
                setsize(e.target.value);
              }}
            >
              {keys.map((value) => {
                return (
                  <option key={value} style={{}}>
                    {value}
                  </option>
                );
              })}
            </select>

            <div style={{ color: "white", margin: "3px 3px", height: "50px" }}>
              <h4>
                <span>&#8377;</span>
                {Totalprize}
              </h4>
            </div>
          </div>
          <hr style={{ color: "white" }}></hr>
          <div>
            <button
              style={{ margin: "5px 5px" }}
              className="btn bg-danger"
              onClick={HandleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
