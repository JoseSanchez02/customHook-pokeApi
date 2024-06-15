import useFetchOneData from "@/hooks/useFechOneData";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  View,
} from "react-native";
import { useEffect } from "react";

export function Details({ navigation, route }) {
  function handleClick() {
    navigation.navigate("Home");
  }

  const { pika, loading, error } = useFetchOneData(route.params.name);

  useEffect(() => {
    console.log(pika, loading, error?.message);
  }, [loading]);

  if (loading) {
    return <ActivityIndicator style={styles.loading} />;
  }

  return (
    <TouchableOpacity onPress={handleClick} style={styles.container}>

      <Text style={styles.text}>Name: {pika.name}</Text>
      <Text style={styles.text}>Weight: {pika.weight}</Text>
      <Text style={styles.text}>Height: {pika.height}</Text>
      <Text style={styles.text}># Pokedex: {pika.id}</Text>
      <Image
        source={{ uri: pika.sprites.front_default }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 8,
    color: "#333",
  },
  image: {
    width: 120,
    height: 120,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
