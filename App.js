import React from 'react';
import { StyleSheet, Text, View, StatusBar, Slider, Button } from 'react-native';
import Nav from './components/Nav.js';
import BluetoothSerial from 'react-native-bluetooth-serial'

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      acceleration: 0,
      connected: false,
      devices: [],
    }

  }

  componentDidMount(){
      BluetoothSerial.enable();
  }

  render() {
    const LongBoardControls = ( 
      <View>
        <Text style={{color: "#3498db", fontSize: 23, marginLeft: 15}}>Voltage:</Text>
        <Text style={{color: "#3498db", fontSize: 23, marginLeft: 15}}>Acceleration: {this.state.acceleration}</Text>
        <View style={styles.container}>
          <Slider style={styles.sliderMod} maximumValue={2000} minimumValue={0} step={50} onValueChange={(e) => this.changingAcceleration(e)} value={this.state.acceleration}/>
        </View>
      </View>
    );

    const SearchLongboard = (
      <Button title="Search Longboard" color="#3498db" onPress={() => this.searchForLongboardDevices()}/>
    );
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Nav title='Longboard Controller'/>
        {this.state.connected ? LongBoardControls : SearchLongboard}
      </View>
    );
  }

  changingAcceleration(e){
    this.setState({acceleration: e});
  }

  searchForLongboardDevices(){
    BluetoothSerial.discoverUnpairedDevices().then((result) =>{
      alert(JSON.stringify(result));
    }).catch((err) => {
      alert("Error: ", err.message);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sliderMod:{
    marginTop: 200,
    marginLeft: 15,
    width: 300,
    transform: [
      { rotateZ: "-90deg"},
    ]
  }
});