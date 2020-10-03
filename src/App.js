import React from "react";
import "./App.css";
import Header from "./header";
import Sidebar from "./sidebar";
import Feed from "./feed";
import Widgets from "./widget";
import Login from "./login";
import { StateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = StateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
