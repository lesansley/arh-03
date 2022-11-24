import * as React from "react";

//The fallback default context if no providers of the context are found in the parent tree
const CountContext = React.createContext([
  0,
  () => console.error("Error: it appears that the context is missing"),
]);

//useCount is the hook that children components use in order to subscribe to the context that is being passed down
//useCount returns the value property on the Context Provider
function useCount() {
  const context = React.useContext(CountContext);
  try {
    if (!context) {
      throw new Error("useCount must be utilized with CountProvider");
    }
    return context;
  } catch (err) {
    console.error(err);
    return null;
  }
}

//The Context Provider component maintains the context available to the children components in the 'value' property
function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return <CountContext.Provider value={value} {...props} />;
}

export { CountProvider, useCount };
