import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { EventListProps } from "../types";

import "./event_list.css";

export default function EventList(props: EventListProps) {
  return (
    <Container className="w-75">
      <h2 className="p-3">{props.title}</h2>
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
