import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import '../../styles/Sign.scss';

export const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    login: '',
    password: '',
  });

  const changeHandler = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign_form">
      <div className="sign_form__content">
        <h1>Login</h1>
        <div className="form">
          <div className="content">
            <div className="input">
              <input
                name="login"
                type="text"
                placeholder="Email & nickname"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="input">
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
        </div>
        <div className="info_register">
          <button>Login</button>
          <p>
            Do you have an <NavLink to="/register">account?</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
