import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon3 raised name='list' type='octicon' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon raised name='gift' type='octicon' size={20} color='gold'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon2 raised name='shopping-cart' type='octicon' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon4 raised name='user-o' type='octicon' size={20} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        width: WIDTH,
        marginTop: HEIGHT-60,
        height: 60,
        backgroundColor: '#303237',
    },
});
export default Menu;
