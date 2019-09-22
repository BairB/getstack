import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Buton from './component/buton';
import Menu from './component/menu'
import logo from './assets/logo.png';
import Icon from 'react-native-vector-icons/AntDesign';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const BarHeight = getStatusBarHeight();

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.logo}>
          <Image source={logo} style={styles.Image} />
          <Icon name='questioncircleo' color='white' size={30} style={styles.question} />
        </View>
        <View style={styles.fakeTabNavigator}>
          <Buton name='Себе' />
          <Buton name='Отправленные' />
          <Buton name='Достижения' />
        </View>
        <View style={styles.content}>
          <Text style={styles.text} fontFamily='SimpleLineIcons'>СТРАНИЦА НАХОДИТСЯ В РАЗРАБОТКЕ</Text>
        </View>
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text : {
    width: WIDTH-50,
    marginTop: 30,
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  header: {
    height: BarHeight,
    width: WIDTH,
    backgroundColor: '#0B0B0D'
  },
  fakeTabNavigator: {
    height: 45,
    width: WIDTH,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    height: 55,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  Image: {
    marginLeft: 110
  },
  question: {
    marginLeft: 86
  },
});

export default App;
