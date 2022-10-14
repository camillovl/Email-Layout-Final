import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View, } from 'react-native';

import Search from '../components/Search';
import Emails from '../components/Emails';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Search navigation={navigation} />
            <Emails navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginTop: Constants.statusBarHeight,
    }
});
