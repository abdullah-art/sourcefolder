import React from "react";
import "../../../../assets/css/util.css";
import "../../../../assets/css/main.css";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../../_actions/user_actions";

export default function SignUpSection(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const dataToSubmit = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    console.log(dataToSubmit);

    dispatch(registerUser(dataToSubmit))
      .then((res) => {
        if (res.payload) {
          navigate("/login");
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
                  Register
                </span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Username"
                    ref={register({ required: true })}
                  />
                  <span className="focus-input100 pt-2">
                    <FontAwesomeIcon icon={faUser} size="lg" color="white" />
                  </span>
                </div>

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

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Re enter password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="cpassword"
                    placeholder="Password"
                    ref={register({ required: true })}
                  />
                  <span className="focus-input100 pt-2">
                    <FontAwesomeIcon icon={faLock} size="lg" color="white" />
                  </span>
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
