import React from "react";
//icons
import { AiOutlineClose } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

//styles
import "./login.scss";

const LoginForm = ({ setActiveModalLogin }) => {
  return (
    <div className="loginmodal__wrapper">
      <span
        className="loginmodal-closebtn"
        onClick={() => setActiveModalLogin(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="form__container">
        <div className="form__title">
          Log In
          <FaLock />
        </div>
        <form>
          <input type="text" placeholder="Username" className="username" />
          <label className="passoword">
            <input type="password" placeholder="Passoword" />
            <span>Forget?</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" /> Remember me
          </label>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
