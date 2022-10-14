import { StyleSheet, View, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function Search({ navigation }) {
    return (

        <View style={styles.searchbarcontainer}>
            <Image style={styles.barrapesquisa} source={require('C:/Users/Camillo/Documents/EmailLayout-master/assets/searchbar1.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchbarcontainer: {
        height: 70,
        backgroundColor: 'gray'
    },
    barrapesquisa: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});