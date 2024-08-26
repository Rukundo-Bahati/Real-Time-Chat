import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };

  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const validateLoginForm = () => {
    const { username, password } = data;

    if (!username || !password) {
      toast.error("All fields are required.", toastOptions);
      return false;
    }
    return true;
  };

  const validateRegisterForm = () => {
    const { firstname, lastname, username, password, confirmpass } = data;
    if (!firstname || !lastname || !username || !password || !confirmpass) {
      toast.error("All fields are required.", toastOptions);
      return false;
    }
    if (password !== confirmpass) {
      toast.error("Passwords do not match.", toastOptions);
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setData(initialState);
    setConfirmPass(true);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        if (validateRegisterForm()) {
          setConfirmPass(true);
          if (data.password === data.confirmpass) {
            await dispatch(signUp(data, navigate));
          } else {
            setConfirmPass(false);
          }
        }
      } else {
        if (validateLoginForm()) {
          await dispatch(logIn(data, navigate));
        }
      }
    } catch (error) {
      console.log("Error in handleSubmit:", error); // Debugging log
      if (error.response && error.response.data) {
        toast.error(error.response.data, toastOptions);
      } else {
        toast.error(
          "An unexpected error occurred. Please try again later.",
          toastOptions
        );
      }
    }
  };

  return (
    <div className="Auth">
      <div className="all">
        <div className="a-left">
          <img src={Logo} alt="Logo" />
          <div className="Webname">
            <h1>LinkUp</h1>
            <h6>Where conversations come alive</h6>
          </div>
        </div>

        <div className="a-right">
          <form className="infoForm authForm" onSubmit={handleSubmit}>
            <h3>{isSignUp ? "Register" : "Login"}</h3>
            {isSignUp && (
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder="Username"
                className="infoInput"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                className="infoInput"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              {isSignUp && (
                <input
                  type="password"
                  className="infoInput"
                  name="confirmpass"
                  placeholder="Confirm Password"
                  value={data.confirmpass}
                  onChange={handleChange}
                />
              )}
            </div>

            <span
              style={{
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-end",
                marginRight: "5px",
                display: confirmPass ? "none" : "block",
              }}
            >
              *Confirm password is not same
            </span>
            <div>
              <span
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                {isSignUp
                  ? "Already have an account? Login"
                  : "Don't have an account? Sign up"}
              </span>
              <button
                className="button infoButton"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Auth;
