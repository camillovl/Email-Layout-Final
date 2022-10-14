import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from 'react-native-webview';



export default function EmailScreen({ route }) {
    const { id } = route.params;

    const [emailscreen, setEmailScreen] = useState([]);

    useEffect(function () {
        async function getData() {
            const response = await fetch(`https://mobile.ect.ufrn.br:3002/emails/${id}`)
            const emailscreen = await response.json();
            setEmailScreen(emailscreen);
        }
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.emailscreen}>
                <View style={styles.titulo}>
                    <Text style={styles.tituloTitle}> {emailscreen.tittle} </Text>
                </View>
                <View style={styles.info}>
                    <Image style={styles.userimg} source={{ uri: emailscreen.picture }} />
                    <View style={styles.infotexto}>
                        <Text> To {emailscreen.to} from {emailscreen.from} </Text>
                        <Text> {emailscreen.time} </Text>
                    </View>
                </View>
                <View style={styles.body} >
                    <WebView
                        source={{ html: emailscreen.body }}
                    />
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*marginTop: Constants.statusBarHeight,*/
        backgroundColor: '#fff'
    },
    emailscreen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titulo: {
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    tituloTitle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    info: {
        /*backgroundColor: 'orange',*/
        flexDirection: 'row',
        alignItems: 'center'
    },
    infotexto: {
        flex: 1
    },
    userimg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 5
    },
    body: {
        fontSize: 90
    }


});