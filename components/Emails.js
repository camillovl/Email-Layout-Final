import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Emails({ navigation }) {
	const [emails, setEmails] = useState([]);

	useEffect(function () {
		async function getData() {
			const response = await fetch("https://mobile.ect.ufrn.br:3002/emails");
			const emailsServidor = await response.json();
			setEmails(emailsServidor);
		}
		getData();
	}, []);

	function renderItem({ item }) {
		return (
			<View style={styles.emails}>
				<TouchableOpacity style={styles.EmailContainer} onPress={() => navigation.navigate('EmailScreen', {
					id: item.id
				})}>
					<View style={styles.imagem}>
						<Image style={styles.userimg} source={{ uri: item.picture }} />
					</View>
					<View style={styles.EmailInfo}>
						<View style={styles.textos}>
							<Text style={styles.titulo}> From {item.from} to {item.to} </Text>
							<Text style={styles.date}> {item.time} </Text>
						</View>
						<Text style={styles.titulo}> {item.tittle} </Text>
						<View style={styles.EmailBaixo}>
							<Text> {item.summary} </Text>
							{item.star == true ? <FontAwesome5 name="star" size={14} color="gray" /> : ''}
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={emails}
				renderItem={renderItem}
				keyExtactor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	emails: {
		flex: 1,
		padding: 10
	},
	EmailContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: 'center'
	},
	EmailInfo: {
		flex: 1,
	},
	EmailCima: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	userimg: {
		height: 60,
		width: 60,
		borderRadius: 30,
		margin: 5,
	},
	textos: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	EmailBaixo: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	titulo: {
		fontWeight: "bold"
	},
	date: {
		color: '#1870D5'
	}
});
