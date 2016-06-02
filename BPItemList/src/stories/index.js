import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../index';
import BPItem from '../components/BPItem.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

storiesOf('BPItem', module)
  .add('高低压均超标', () => (
    <BPItem
      date = {new Date()}
      HP='120'
      LP='60'
      pulse='80'
    />
  ))
  .add('仅仅高压超标', () => (
    <BPItem />
  ))
  .add('仅仅低压超标', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('高低压均正常', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });
