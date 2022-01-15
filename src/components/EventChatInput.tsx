import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FloatingLabel, Form, Button, InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";

import { EventChatInputProps } from "../types";

import "./event_chat.css";

export default function EventChatInput(props: EventChatInputProps){
  return(
	<Container className="chat-input-panel">
	  <FloatingLabel
		className="p-2"
		label="Chat Contents">
		<Form.Control
		as="textarea"
		placeholder="Chat"
		style={{ height: '100px' }}
		/>
	  </FloatingLabel>
	  <Button variant="primary" className="m-2">
		Chat
	  </Button>
	</Container>
  )
}
