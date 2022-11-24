import * as React from "react";
import { CountDisplay, Counter } from "./screens/counter";
import { CountProvider } from "./context/counter-context";

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
