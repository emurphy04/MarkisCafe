import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NewPost from './NewPost';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


function NavBar({ route, username }) {
    const navigation = useNavigation()
    return (
        <View style={styles.bar}>
            <View style={styles.profileIcon}>
                <Image style={{width: 75, height: 75}} source={require('../assets/usericon.png')}/>
            </View>
            <Pressable onPress={() => navigation.navigate('New Post', {username: username})} style={styles.postIcon}>
                <Image style={{width: 75, height: 75}} source={require('../assets/posticon.png')}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        borderTopWidth: 1,
        borderTopColor: "#2f3336",
        backgroundColor: "#000000",
        width: 500,
        height: 100,
    },
    profileIcon: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 10
    },
    postIcon: {
        width: 50,
        height: 50,
        marginLeft: 340,
        marginTop: -52
    },
})

export default NavBar;