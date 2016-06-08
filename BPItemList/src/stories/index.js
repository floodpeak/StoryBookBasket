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
      HP='150'
      LP='100'
      pulse='80'
    />
  ))
  .add('仅仅高压超标', () => (
    <BPItem
      date = {new Date()}
      HP='150'
      LP='70'
      pulse='59'
    />
  ))
  .add('仅仅低压超标', () => (
    <BPItem
      date = {new Date()}
      HP='100'
      LP='100'
      pulse='67'
    />
  ))
  .add('高低压均正常', () => (
    <BPItem
      date = {new Date()}
      HP='120'
      LP='70'
      pulse='80'
    />
  ));

storiesOf('BPItemList', module)
  .add('高低压均超标', () => (
    <BPItem
      date = {new Date()}
      HP='150'
      LP='100'
      pulse='80'
    />
  ))
  .add('仅仅高压超标', () => (
    <BPItem
      date = {new Date()}
      HP='150'
      LP='70'
      pulse='59'
    />
  ))
  .add('仅仅低压超标', () => (
    <BPItem
      date = {new Date()}
      HP='100'
      LP='100'
      pulse='67'
    />
  ))
  .add('高低压均正常', () => (
    <BPItem
      date = {new Date()}
      HP='120'
      LP='70'
      pulse='80'
    />
  ));
