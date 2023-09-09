import {useState } from "react";
import "../../assets/style/Login.css";
import FormInput from "../../components/form/forminput";
import React from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const baseUrl = "https://dine-help-api.onrender.com/api/v1/";

const Signup = () => {
  const navigator = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "phone",
      placeholder: "Phone",
      label: "Phone",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      username: values.username,
      email: values.email,
      phone: Number(values.phone),
      password: values.password,
    });
    await axios
      .post(`${baseUrl}signup`, data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if(response.status == '201' || response.status == '200'){
          toast.success('Registered successfully')
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('isLoggedIn', true)
          navigator("/products" , {replace:true})
        }else{
          toast.error('Email already exists')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
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
};

export default Signup;
