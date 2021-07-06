import React from "react";
import "../../../../assets/css/util.css";
import "../../../../assets/css/main.css";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../_actions/user_actions";

export default function LoginSection(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const dataToSubmit = {
      username: "",
      email: data.email,
      password: data.password,
    };

    dispatch(loginUser(dataToSubmit))
      .then(({ payload }) => {
        if (payload) {
          localStorage.setItem("auth", true);
          localStorage.setItem("key", payload.auth_token);
          navigate("/dashboard");
          console.log(payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section id="loginSection">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className="login100-form validate-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter email"
                >
                  <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                  />
                  <span className="focus-input100 pt-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      color="white"
                    />
                  </span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({ required: true })}
                  />
                  <span className="focus-input100 pt-2">
                    <FontAwesomeIcon icon={faLock} size="lg" color="white" />
                  </span>
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Login</button>
                </div>

                <div className="text-center p-t-60">
                  <a className="txt1" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div>{errors.email && <p>Invalid email</p>}</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
