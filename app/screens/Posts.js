import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'

var posts = ''



function Posts({ navigation , route }) {
    const [posts, setPosts] = useState('')
    fetch("http://api.markiscafe.com:3000/posts")
    .then(response => response.json())
    .then(data => {
        const data2 = JSON.parse(JSON.stringify(data))
        setPosts(data2.reverse())
    });

    return(
        <View style={styles.container}>
            <FlatList
                refreshing
                data={posts}
                renderItem={({ item }) => (
                    <View style={styles.background} key={item.postid}>
                        <View style={styles.usernameBox}>
                            <Text style={{fontWeight:"bold", color:"white"}}>@{item.username}</Text>
                        </View>
                        <Text style={{color: "white"}}>{item.content}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        borderColor: "#2f3336",
        borderBottomWidth: 1,
        width:430,
        minHeight: 60,
        height: "auto",
        padding: 10,
        paddingBottom: 40,
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: "#000000"
    },
    container: {
        flex: 1
    },
    usernameBox: {
        width: 200,
        height: 25,
    }
})

export default Posts;