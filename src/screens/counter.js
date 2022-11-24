import { useCount } from "../context/counter-context";

//useCount returns the value property on the Context Provider
function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

export { CountDisplay, Counter };
