import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function NewPost({navigation, route}) {
    const [content, setContent] = useState('');
    const { username } = route.params;
    return (
        <View style={styles.background}>
            <TextInput onChangeText={content => setContent(content)} defaultValue={content} placeholder="Tell the world what you're thinking..." autoCorrect autoFocus maxLength={255} multiline={true} style={styles.content}></TextInput>
            <Pressable onPress={() => post(username, content, navigation)} style={styles.postButton}>
                <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Post</Text>
            </Pressable>
        </View>
    );
}

function post(username, content, navigation){
    if (content.length != 0){
        fetch('http://api.markiscafe.com:3000/posts', {
            method:"POST",
            body: JSON.stringify({
                "username": username,
                "content": content,
                "likes": 0
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        navigation.navigate('Home', {username: username})
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000000"
    },
    postButton: {
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 150,
        width: 300,
        margin: 65,
        height: 55
    },
    content: {
        color: "white",
        fontSize: 25,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#000000",
        borderColor: "#2f3336",
        borderWidth: 1,
        margin: 15,
        width: 400,
        minHeight: 110
    }
})

export default NewPost;