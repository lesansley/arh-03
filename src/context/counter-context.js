import * as React from "react";

//The fallback default context is provided if no providers of the context are found in the parent tree.
//The context created from createContext is passed in to the useContext hook
//it is also the Context Provider wrapper that forms the context component
const CountContext = React.createContext([
  0,
  () => console.error("Error: useCount must be utilized with CountProvider"),
]);

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
