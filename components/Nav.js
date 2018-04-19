import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Nav extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={style.nav}>
                <Text style={{color: 'white', fontSize:16, fontWeight:"bold", paddingTop:10}}>{this.props.title.toUpperCase()}</Text>
            </View>        
        );
    }
}

const style = StyleSheet.create({
    nav: {
        backgroundColor: '#3498db',
        height: 70,
        paddingBottom: 0,
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default Nav