import React from "react";
import "./App.css";
import "./component/contact/Contact";
import Contacts from "./component/contact/Contacts";
import Header from "./component/layout/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./component/contact/AddContact";
import EditContact from "./component/contact/EditContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/staticPages/About";
import NotFound from "./component/staticPages/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header FormName="Contact Form"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/add" component={AddContact}></Route>
              <Route exact path="/edit/:id" component={EditContact}></Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
