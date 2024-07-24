import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Button, Pressable, TextInput } from 'react-native';
import Register from './Register';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState } from 'react';


function WelcomeScreen({navigation, route}) {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const errortext = ""

    return (
        <View style={styles.background}>
            <View>
                <TextInput onChangeText={username => setUsername(username)} defaultValue={username} autoComplete='username' autoCapitalize='none' placeholder='Username' style={styles.textInput}></TextInput>
                <TextInput onChangeText={pass => setPass(pass)} defaultValue={pass} autoComplete='current-password' autoCapitalize='none' placeholder='Password' style={styles.textInput}></TextInput>
                <Text style={{color:"red", alignSelf:"center", margin:5}}>{errortext}</Text>
            </View>
            <Pressable onPress={() => login(username, pass, {navigation})} style={styles.loginButton}>
                <Text style={{color: "white"}}>Login</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register')}>
                <View style={styles.registerButton}>
                    <Text>Register</Text>
                </View>
            </Pressable>
        </View>
        
    );
}

function login(username, password, {navigation}){
    try {
        fetch(`http://api.markiscafe.com:3000/users/${username}`, {
            method: "GET"
        }).then(body => {
            return body.json()
        }).then(user => {
            if (username == user[0].username){
                if (password == user[0].pass){
                    navigation.navigate('Home', {username: username})
                } else{
                    errortext = "Invalid username or password"
                }
            } else{
                errortext = "Invalid username or password"
            }
        })
    } catch (error) {
        console.log('Invalid username')
    }
        
}

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 15,
        width: 350,
        height: 65,
        fontSize: 30,
        padding: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 10
    },

    background: {
        borderTopWidth: 1,
        borderTopColor: "#2f3336",
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#000000"
    },

    loginButton: {
        fontSize: 55,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 60,
        width: 250,
        height: 50,
        backgroundColor: "#656CB4",
        color: "black",
        marginBottom: 10
    },

    registerButton: {
        fontSize: 55,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 60,
        width: 250,
        height: 50,
        backgroundColor: "white",
        color: "black",
        marginBottom: 300
    }
})

export default WelcomeScreen;