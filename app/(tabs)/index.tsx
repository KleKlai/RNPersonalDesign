import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>Carousell Image Slider</Text>
      <Text>Form</Text>
      <Text>Recent Transaction</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          position: "absolute",
          bottom: 20,
          right: 20,
          height: 70,
          backgroundColor: "#fff",
          borderRadius: 100,
        }}
        onPress={() => {
          router.push("/modal");
        }}
      >
        <Ionicons name="add" size={38} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
