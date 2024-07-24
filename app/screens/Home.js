import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavBar from './NavBar';
import Posts from './Posts';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home({ navigation, route }) {
    const { username } = route.params;
    return (
        <View style={styles.background}>
            <Posts></Posts>
            <NavBar username={username}></NavBar>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        borderTopWidth: 1,
        borderTopColor: "#2f3336",
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#000000"
    },
})

export default Home;