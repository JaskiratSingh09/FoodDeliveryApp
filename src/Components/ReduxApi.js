import React, { createContext, useContext, useReducer } from "react";

const Stateval = createContext();
const Dispatch = createContext();

const reducer = (state, action) => {
  if (action.Type === "ADD") {
    return [
      ...state,
      {
        id: action.id,
        img: action.img,
        Name: action.Name,
        quantity: action.quantity,
        Total: action.Total,
      },
    ];
  }
  if (action.Type === "REMOVE") {
    let newarr = [...state];
    newarr.splice(action.index, 1);
    return newarr;
  } else return state;
};

export function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Stateval.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Stateval.Provider>
  );
}

export const Statefunc = () => useContext(Stateval);
export const Dispatchfunc = () => useContext(Dispatch);
