/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'row'}}>
        <Text style={{flex: 1, backgroundColor: 'yellow', margin: 20}}>
          Halaman 1
        </Text>
        <Text style={{flex: 2, backgroundColor: 'green'}}>Halaman 2</Text>
      </View>
    );
  }
}
