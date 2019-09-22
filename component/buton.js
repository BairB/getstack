import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { LinearGradient } from 'expo-linear-gradient';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const BarHeight = getStatusBarHeight();

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            press: false
        }
    }
    press=()=> {
        this.setState({press: !this.state.press});
    }

    render() {
        const { name } = this.props;
        return (
            <TouchableOpacity onPress={this.press}>
                <LinearGradient style={styles.container} colors={ this.state.press ? ['#545454', '#404040', '#404040'] : ['#404040', 'black', 'black'] }>
                    <Text style={styles.text}>{name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH / 3,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 14,
    },
});

export default App;
