import React from "react";
import { useState } from "react";
import FormInput from "../../components/form/forminput";
import "../../assets/style/Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://dine-help-api.onrender.com/api/v1/login"

function Login() {
  const navigator = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}`, values)
    .then(res => {
        navigator("/products" , {replace: true})
    }).catch(err => {
      console.log(err)
    })
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
