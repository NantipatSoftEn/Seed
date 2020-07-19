import { connect } from "react-redux";
import { authHuman } from "../actions/Auth";
import Login from "../views/Login";

const mapStateToProps = (state) => {
  return {
    auth_error: state.Auth.auth_error,
    token: state.Auth.token,
    auth_pending: state.Auth.auth_pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAuthHuman: (data) => {
      dispatch(authHuman(data));
    },
  };
};

const LoginWithLogic = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginWithLogic;