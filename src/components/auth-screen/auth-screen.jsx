import React from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import AuthForm from "../auth-form/auth-form";
import {AuthorizationStatus, AppRoute} from "../../const";
import {getCity} from "../../store/reducers/offers-process/selectors";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";

const AuthScreen = ({city, authorizationStatus}) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={AppRoute.ROOT} />
    );
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={`${AppRoute.ROOT}${city.name.toLowerCase()}`} className="locations__item-link">
                <span>{city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthScreen.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  authorizationStatus: getAuthorizationStatus(state)
});

export {AuthScreen};
export default connect(mapStateToProps)(AuthScreen);
