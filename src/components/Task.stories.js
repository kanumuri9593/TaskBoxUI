import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
  id: '1',
  title: 'Test the rendering of Task component',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, title: 'Test the rendering of Task component Pinned',state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, title: 'Test the rendering of Task component archived state' ,state: 'TASK_ARCHIVED' }} {...actions} />);