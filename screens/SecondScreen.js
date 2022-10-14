import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function SecondScreen({ navigation }) {
    return (
        <View style={styles.teste} >
            <Text> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    teste: {
        height: 70,
        backgroundColor: 'pink'
    }
});