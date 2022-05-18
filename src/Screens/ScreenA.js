import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
const ScreenA=({navigation})=>{
  //! navigation is a prop that is passed to the component
  const onPressHandler = () => {
   navigation.navigate('ScreenB');
   //!  navigation.replace('ScreenB'); //! no back button
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? 'red' : 'blue' })}
      >
        <Text style={styles.text}>Goto Screen B</Text>
      </Pressable>
    </View>
  )
}

export default  ScreenA;





const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  }

})
