import React, { useState } from 'react';
import { TextInput, View,StyleSheet, Text, Pressable } from 'react-native';



function Register({navigation}) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const errortext = ""

    return (
        <View style={styles.background}>
            <View>
                <TextInput style={styles.input} onChangeText={fname => setFname(fname)} defaultValue={fname} placeholder='First Name' autoComplete='given-name'></TextInput>
                <TextInput style={styles.input} onChangeText={lname => setLname(lname)} defaultValue={lname} placeholder='Last Name' autoComplete='family-name'></TextInput>
                <TextInput style={styles.input} onChangeText={username => setUsername(username)} defaultValue={username} placeholder='Username' maxLength={25}></TextInput>
                <TextInput style={styles.input} onChangeText={pass => setPass(pass)} defaultValue={pass} placeholder='Password' textContentType='newPassword' autoComplete='new-password'></TextInput>
            </View>
            <Pressable onPress={() => registerButton(username, fname, lname, pass, navigation)} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </Pressable>
            <View>
                <Text style={styles.errorText}>{errortext}</Text>
            </View>
        </View>
        
    );
}

function registerButton(username, fname, lname, pass, navigation){
    if (username.length < 26){
        fetch('http://api.markiscafe.com:3000/users', {
            method: "POST",
            body: JSON.stringify(
                {
                    "username": username,
                    "pfp": "default",
                    "pass": pass,
                    "fname": fname,
                    "lname": lname,
                    "bio": "Hello World!"
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        navigation.navigate('Home', {username: username})
    } else {
        errortext = "Username exceeds 25 characters, please try again."
    }
        
    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000000"
    },

    input: {
        backgroundColor:"white",
        fontSize: 20,
        height: 40,
        margin: 12,
        padding: 10,
        marginLeft: 60,
        marginRight: 60,
        borderRadius: 15
    },

    errorText: {
        color: "red",
        margin: 20,
        textAlign: "center"
    },

    registerButton: {
        fontSize: 55,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 60,
        width: 250,
        height: 50,
        backgroundColor: "#656CB4",
        color: "white",
        marginTop:20,
        marginBottom: 10
    },
    registerButtonText: {
        color: "white",
    }
  });

export default Register;