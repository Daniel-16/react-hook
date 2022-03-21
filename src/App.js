import React from "react";
import "./styles.css";
// const { Provider, Consumer } = React.createContext();
//context is designed to share global data
//hooks
const Store = React.createContext();

export function Parent(props) {
  const obj = {
    text: "red",
    background: "blue"
  };

  return <Store.Provider value={obj}>{props.children}</Store.Provider>;
}

export function Child() {
  const hook = React.useContext(Store);
  return <div style={{ background: hook.background }}>{hook.text}</div>;
}

export default function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}
