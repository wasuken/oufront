import React from 'react';
import {action} from '@storybook/addon-actions';
import EventChatInput from './components/EventChatInput';

import { User } from "./types";

export default {
  title: 'event'
};

const user: User = {
  email: "unchi@example.com",
  display_name: "unchi_user",
  login: "true",
};

export const eventChatInput = () => (
  <EventChatInput user={user} />
);
