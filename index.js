import React from "react";
import ReactDOM from "react-dom/client";

const Header = React.createElement("h1", {}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById('root'));
const jsx = (<h1>Hello world using JSX</h1>);

//React Component

  //Functional Component

  const Header2 = () => {
    return (
        <h2>Functional Component</h2>
    )
  }
root.render(<Header2 />);