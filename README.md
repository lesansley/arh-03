# arh-03

## useContext hook

The useContext hook solves for sharing state between components without prop drilling.

```
import * as React from 'react'

const FooContext = React.createContext()

function FooDisplay() {
  const foo = useFoo() //Return value is derived from the value prop passed into FooContext.Provider
  return <div>Foo is: {foo}</div>
}

//Custom useContext hook
function useFoo() {
  const context = React.useContext(FooContext)
  //Error handling incase the custom hook is used without the context provider
  try {
    if(!context) throw new Error("useFoo must be used within FooContextProvider")
    return context
  } catch(err) {
    console.error(err)
    return null
  }
}

function FooContextProvider(props) {
  const displayText = "I am foo"
  return <FooContext.Provider value={displayText} props={...props}/> //The value prop contains the state accessible by the child components
}

ReactDOM.render(
  <FooContextProvider>
    <FooDisplay /> //This component has access to the state held in FooContextProvider without having to explicitly pass state in through props
  </FooContextProvider>,
  document.getElementById('root'),
)

// renders <div>Foo is: I am foo</div>
```

