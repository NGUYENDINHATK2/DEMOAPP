import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './src/Screens/ScreenA';
import ScreenB from './src/Screens/ScreenB';

console.log('Start')
const Stack=createStackNavigator();
const App=()=>{
  return (
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{headerShown:false}}//! hide header all activity
        >
          <Stack.Screen 
          options={{headerShown:false}}
          //! headerShown hides or show header
          name="ScreenA" component={ScreenA}
           />
          <Stack.Screen name="ScreenB" component={ScreenB} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default  App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
