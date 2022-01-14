import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Provider } from 'react-redux';
import Perfil from './src/investidor/Perfil.js';
import Login from './src/login/Login.js';
import store from './src/redux/store.js'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        
            <Perfil />

          <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // justifyContent:'center',
    // alignContent:'center',
    alignItems:'center',

    
  },
  // componentes:{
  //   flex:0.9,
  //   // backgroundColor:'yellow'
  // }
});
