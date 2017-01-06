import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 40
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        size: 25
      });
    }, 2000);
  }
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon size={this.state.size} name="rocket" />
      </View>
    );
  }
}
