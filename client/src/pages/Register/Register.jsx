import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import '../../styles/Sign.scss';
export const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    email: '',
    username: '',
    lastname: '',
    nickname: '',
    password: '',
  });

  const changeHandler = (e) => {
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign_form">
      <div className="sign_form__content">
        <h1>Create account</h1>
        <div className="form">
          <div className="content">
            <div className="input">
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="input">
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="input">
              <input
                name="lastname"
                type="text"
                placeholder="Lastname"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="input">
              <input
                name="nickname"
                type="text"
                placeholder="Nickname"
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
          <button>Create</button>
          <p>
            Do you have an <NavLink to="/">account?</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
