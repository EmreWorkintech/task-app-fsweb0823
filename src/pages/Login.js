import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Login.css";
import { useState } from "react";

const initialLogin = {
  email: "",
  password: "",
};
const Login = (props) => {
  const [loginFormState, setLoginFormState] = useState(initialLogin);

  const handleChange = (evt) => {
    setLoginFormState({
      ...loginFormState,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogin(loginFormState);
  };

  return (
    <>
      <h2>LOGIN</h2>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Kayıtlı email adresiniz"
            type="email"
            data-cy="email-input"
            value={loginFormState.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Şifreniz"
            type="password"
            data-cy="password-input"
            value={loginFormState.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button id="button-center" color="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
