import * as React from "react";

//The context created from createContext is passed in to the useContext hook
//The context created from createContext also offers the Provider component wrapper
const CountContext = React.createContext();

//Fallback default context can be provided in case no providers of the context are found in the parent tree.
//This is not recommend because it's a mistake to try and use context outside a provider
// const CountContext = React.createContext([
//   0,
//   () => console.error("Error: useCount must be utilized with CountProvider"),
// ]);

//useCount is the hook that children components use in order to subscribe to the context that is being passed down
//useCount returns the value property on the Context Provider
function useCount() {
  const context = React.useContext(CountContext);
  try {
    if (!context) {
      //This will be true only if there is no default context provided or the deafult context is null
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
