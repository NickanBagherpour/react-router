import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import "./App.css";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  const authHandler = () => {
    setLogin(!login);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={authHandler}>{!login ? "login" : "log out"}</button>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile">
            {login ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
