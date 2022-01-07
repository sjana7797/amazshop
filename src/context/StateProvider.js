import React, { useContext, useReducer, createContext } from "react";

//preaparing the data layer
export const StateContext = createContext();

//wraping the app and providing the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull Information from the data layer
export const useStateValue = () => useContext(StateContext);
