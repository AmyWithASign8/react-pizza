import React from "react";
import { Header } from "../components/index";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/user";

function Authorization() {
  const dispatch = useDispatch();

  const [fistName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const router = useNavigate();
  const onSubmit = () => {
    if (password != "" && email != "") {
      axios
        .post("   https://c7a2-136-169-174-238.eu.ngrok.io/api/user/reg", {
          email,
          password,
        })
        .then((res) => {
          dispatch(setUser(res.data));
          router("/", { replace: true });
        });
    }
    if (!validator.isEmail(email)) {
      setEmailError("Ваш email не соответствует формату");
    } else setEmailError("");
    if (password.length < 8)
      setPasswordError("Пароль не должен быть короче 8 символов");
  };
  const onChangeEmail = (value) => {
    setEmail(value);
  };

  return (
    <div>
      <Header noCart noReg />
      <div className="mainReg">
        <div className="circle"></div>
        <div className="register-form-container">
          <h1 className="form-title">Регистрация</h1>
          <div className="form-fields">
            <div className="form-field"></div>
            <div className="form-field"></div>
            <p>Email</p>
            <div className="form-field">
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
              />
              {emailError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {emailError}
                </p>
              )}
            </div>
            <p>Пароль</p>
            <div className="form-field">
              <input
                name="password"
                placeholder="Пароль"
                type="password"
                pattern="^[a-zA-Z\s]+$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {passwordError}
                </p>
              )}
            </div>
          </div>
          <div className="form-buttons">
            <button className="buttonReg" onClick={onSubmit}>
              Регистрация
            </button>
            <div className="divider">или</div>
            <Link to="/login">
              <a className="buttonReg">Вход в свой аккаунт</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
