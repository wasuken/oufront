import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GroupListProps } from "../types";

export default function GroupList(props: GroupListProps) {
  return (
    <Container className="w-75">
      <h2 className="p-3">
        {props.name}
        <small>{props.orgnizer}</small>
      </h2>
      {props.list.map((e) => (
        <Row className="eventbox">
          <Col md="9">
            <h3>{e.title}</h3>
          </Col>
          <Col md="3">
            {e.event_date.begin.toLocaleDateString()} ~{" "}
            {e.event_date.end.toLocaleDateString()}
          </Col>
          <Col md="12" className="p-3">
            <pre>{e.description}</pre>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
