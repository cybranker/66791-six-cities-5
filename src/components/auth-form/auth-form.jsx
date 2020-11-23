import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import withForm from "../../hocs/with-form/with-form";

const AuthForm = (props) => {
  const {onFieldChange, stateForm, onSubmit} = props;

  return (
    <form className="login__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();

      onSubmit({
        login: stateForm.email,
        password: stateForm.password
      });
    }}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={onFieldChange}/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={onFieldChange}/>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

AuthForm.propTypes = {
  stateForm: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthForm};
export default connect(null, mapDispatchToProps)(withForm(AuthForm));
