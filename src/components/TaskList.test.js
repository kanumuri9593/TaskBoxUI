
import React from 'react';
import ReactDOM from 'react-dom';
import { PureTaskList } from './TaskList';

it('renders when empty', () => {
  const div = document.createElement('div');
  const events = { onSnoozeTask: jest.fn(), onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  ReactDOM.render(<PureTaskList tasks={[]} {...events} />, div);
  ReactDOM.unmountComponentAtNode(div);
});