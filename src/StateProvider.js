import React, { createContext, useContext, useReducer } from "react";

// prepare data layer
export const StateContext = createContext();

// HOC
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// hook to pull data from data layer **
export const useStateValue = () => useContext(StateContext);
