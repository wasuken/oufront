import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface ILoginResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    token: string;
  };
}

export default function Login() {
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
    <div className="rounded p-3 w-25 mx-auto border border-primary">
      <div className="text-center">
        <h1 className="h3 mt-2 mb-3 font-weight-normal">ログイン</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="email"
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
        <div className="text-center">
          <Button variant="primary">ログイン</Button>
        </div>
      </Form>
    </div>
  );
}
