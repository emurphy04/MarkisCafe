import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import NewPost from './app/screens/NewPost';
import Register from './app/screens/Register';
import Home from './app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={WelcomeScreen} options={App.navigationOptions}/>
        <Stack.Screen name="Register" component={Register} options={App.navigationOptions}/>
        <Stack.Screen initialParams={{name: "guest"}} name="Home" component={Home} options={App.navigationOptions}/>
        <Stack.Screen initialParams={{name: "guest"}} name="New Post" component={NewPost} options={App.navigationOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

App.navigationOptions={
  headerStyle:{
    backgroundColor: "#000000",
  },
  headerTintColor: "#fff"
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: '15pt',
    marginLeft: '15px'
  },

  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
});
