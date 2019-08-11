import React, { Component } from 'react';
import batsignal from './bat-signal.jpg';
import './styles.css';

export default class Main extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return <img src={batsignal} alt={'logo'} />;
  }
}
