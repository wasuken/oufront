import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { EventChatListProps } from "../types";

import "./event_chat.css";

export function EventChatList(props: EventChatList){
  return (
	<Container className="w-75">
      <h2 className="p-3">{props.title}</h2>
      {props.list.map((e) => (
        <Row className="chatlist">
		  <Col md="12" className="pb-3">
            {e.created_at.toLocaleString()}
          </Col>
          <Col md="9">
            <h4 className="title">
			  {e.user_name}
			  (<small className="user-id">@{e.user_id}</small>)
			</h4>
          </Col>
          <Col md="12" className="p-3">
            <p className="comment">{e.contents}</p>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
