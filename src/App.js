import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Main from "./views/layout/Main";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import CardBlogs from "./components/CardBlogs";
import UsersContainner from "./container/UsersContainner";
import LoginWithLogic from "./container/AuthContainer";
import generateMain from "./hoc/generateMain";
import Maintenance from "./components/Maintenance";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./context/PrivateRoute";
import validateValue from "./utils/validateValue";
const history = createBrowserHistory();
const CardWithLayout = generateMain(Cards);
const ModalWithLayout = generateMain(Modal);
const BoardWithLayout = generateMain(UsersContainner.BoardWithLogic);
const FormsWithLayout = generateMain(UsersContainner.FormsWithLogic);
const UsersCardWithLayout = generateMain(UsersContainner.UsersCardWithLogic);
const CardBlogsWithLayout = generateMain(CardBlogs);
const MaintenanceWithLayout = generateMain(Maintenance);

function App() {
  console.log(`test=`, localStorage.getItem("token"));
  let isAuth = true;
  if (validateValue(localStorage.getItem("token"))) {
    isAuth = false;
  }
  return (
    <React.Fragment>
      <AuthContext.Provider value={isAuth}>
        <Router history={history}>
          <Route exact path="/login" component={LoginWithLogic} />
          <PrivateRoute exact path="/" component={Main} />
          <Route exact path="/form" component={FormsWithLayout} />
          <Route exact path="/form/:id/edit" component={FormsWithLayout} />
          <Route exact path="/card" component={CardWithLayout} />
          <Route exact path="/board" component={BoardWithLayout} />
          <Route exact path="/profile" component={MaintenanceWithLayout} />
          <Route exact path="/settings" component={MaintenanceWithLayout} />
          <Route exact path="/logout" component={MaintenanceWithLayout} />
          <Route exact path="/blog" component={CardBlogsWithLayout} />
          <Route exact path="/modal" component={ModalWithLayout} />
          <Route exact path="/usercard" component={UsersCardWithLayout} />
          {/* <PrivateRoute path="/admin" component={Main} /> */}
          {/* <Route exact path="/upload" component={} /> */}
        </Router>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
