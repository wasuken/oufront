import React from 'react';
import {action} from '@storybook/addon-actions';
import { EventList } from './components/EventList';
import { OufEvent, EventListProps, initialOufEventState } from './types'

export default {
  title: 'event'
};

const eList: OufEvent[] = [
  {
    title: "sample",
    description: `これはテスト
テストこれは
ててててこれはすと`,
    event_date: {
      begin: new Date(),
      end: new Date(),
    },
    participate_date: {
      begin: new Date(),
      end: new Date(),
    },
  },
  {
    title: "sample2",
    description: "buriburiburyu",
    event_date: {
      begin: new Date(),
      end: new Date(),
    },
    participate_date: {
      begin: new Date(),
      end: new Date(),
    },
  },
];

export const eventList = () => (
  <EventList list={eList} />
);
