import React from 'react';
import {action} from '@storybook/addon-actions';
import { EventChatList } from './components/EventChatList';

import { EventChat } from './types';

export default {
  title: 'event'
};

const chatList: EventChat[] = [
  {
	user_id: "kdsajfklasdfk",
	user_name: "テストユーザ1",
	contents: `この部屋臭くね？あkflsdjkl；だsっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっj`,
	created_at: new Date(),
  },
  {
	user_id: "buriburiunchi",
	user_name: "テストユーザ2",
	contents: "臭いのはお前の体臭だぞ",
	created_at: new Date(),
  },
  {
	user_id: "kdsajfklasdfk",
	user_name: "テストユーザ1",
	contents: "ひどい",
	created_at: new Date(),
  },
];

export const eventChatList = () => (
  <EventChatList list={chatList} />
);
