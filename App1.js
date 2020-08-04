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

import Header1 from './Header1';

// const App: () => React$Node = () => {
//   return (
//     // view = div, style, props, touch handlings
//     <View>
//       <StatusBar backgroundColor="red" />
//       <Text>First App!</Text>
//     </View>
//   );
// };
//
// export default App;

// bisa tanpa variable
const Footer = props => {
  var cr = '@fatoni';
  return (
    <View>
      <Text>Ini adalah footer</Text>
      <Text>
        {cr} {props.tahun}
      </Text>
    </View>
  );
};

class Header extends Component {
  render() {
    return <Text> Ini adalah header</Text>;
  }
}

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      jumlah: 0,
    };
  }

  handleTambah = () => {
    Alert.alert('Ini adalah handleTambah');

    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="red" />
        <Header />
        <Header1 name="Nama : Fatoni" />
        {/* <Header1 person="ini adalah props person" />
        <Header1 usia="Usia: 20" />*/}
        <Text style={styles.header}>First App!</Text>
        <Footer tahun="2019" />
        <Button title="Button Tambah" onPress={this.handleTambah} />
        <Text style={{marginTop: 20, color: 'blue'}}>
          Jumlah : {this.state.jumlah}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  tahun: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
});
