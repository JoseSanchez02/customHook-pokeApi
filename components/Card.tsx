import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card({ data = null, navigation }) {

    function handleClick() {
        navigation.navigate("Details", { name: data?.url });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        height: 100,
        width: 100,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    },
});
