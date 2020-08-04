import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

// export default class Header1 extends Component {
//   render() {
//     return <Text> Ini adalah header 1</Text>;
//   }
// }
// class Header1 extends React.Component {}
class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      usia: this.props.usia,
      inputan: '',
      inputan1: '',
    };
  }
  //
  // state = {
  //   name: this.props.name,
  //   usia: this.props.usia,
  // };

  handleInput = events => {
    this.setState({inputan1: events});
  };

  render() {
    return (
      <View>
        <Text>Header1</Text>

        <Text>
          {this.props.person}
          {this.state.name}
          {this.state.usia}
        </Text>
        <TextInput
          onChangeText={events => {
            this.setState({inputan: events});
          }}
        />
        <Text>Ini adalah text : {this.state.inputan}</Text>

        <TextInput
          onChangeText={this.handleInput}
          placeholder="Masukkan Inputan"
          value={this.state.inputan1}
        />
        <Text>Ini adalah text : {this.state.inputan1}</Text>
      </View>
    );
  }
}
export default Header1;
