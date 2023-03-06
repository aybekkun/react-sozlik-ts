import { Button } from "@mui/material";

import React from "react";
import { Navigate } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "../../hooks/useAppSelector.hook";
import useSimpleForm from "../../hooks/useSimpleForm";
import { userAuth } from "../../redux/auth/asyncActions";

import "./Login.scss";

type FormType = {
  phone: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  const { formData, handleInputChange, handleSubmit, isSendingForm } = useSimpleForm<FormType>(
    { phone: "", password: "" },
    (args) => {
      dispatch(userAuth(args));
    }
  );
  const { phone, password } = formData;
  if (isAuth) {
    return <Navigate to="/admin" />;
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <div className="container">
          <input value={phone} name="phone" onChange={handleInputChange} type="tel" placeholder="Login" required/>
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
            required
          />
          <Button disabled={isSendingForm} type="submit" color="primary" variant="contained" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
