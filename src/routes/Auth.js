import React from "react";
import { useState } from "react";
import { styled } from "styled-components";


function EmailInput({ inputValue, onChange }) {
  return (
    <Styleinput
      name="email"
      type="email"
      placeholder="Email"
      required
      value={inputValue}
      onChange={onChange}
    />
  );
}

function PwdInput({ inputValue, onChange }) {
  return (
    <input
      name="password"
      type="password"
      placeholder="Password"
      required
      value={inputValue}
      onChange={onChange}
    />
  );
}
const Styleinput = styled.input`
background-color: black;
color: aqua;
`

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { target: { name, value } } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
      console.log(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <EmailInput inputValue={email} onChange={onChange} />
        <PwdInput inputValue={password} onChange={onChange} />
        <input type="submit" value="Log In" />
      </form>

      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
}

export default Auth;
