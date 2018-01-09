/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';



export default class App extends Component<{}> {

    constructor(props) {
        super();
        this.state = {

            count: 0

        };

    }

  render() {
    return (
    <Text>Call</Text>
    );
  }
}

