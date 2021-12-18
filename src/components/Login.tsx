import React, { useState } from "react";
import { Form, Button } from "react-react-bootstrap";
import { Link } from "react-react-router-dom";
import "./login.css";

interface ILoginResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    token: string;
  };
}

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ログイン処理
  const reqLogin = function () {
    fetch(`/api/user/login?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then((json: ILoginResponse) => {
        if (json.error) {
          console.log("error", json.message);
          return;
        }
        localStorage.setItem("token", json.token);
      });
  };
  return (
    <div className="wrapper fadeInDown">
      <div className="formContent">
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              type="text"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
