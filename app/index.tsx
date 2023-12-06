import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useRef } from "react";
import { normalize } from "../lib/fontNormilize";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";
import Colors from "../constants/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const index = () => {
  const theme = useColorScheme() ?? "light";
  const signUpRef = useRef<BottomSheetMethods>(null);
  const signIpRef = useRef<BottomSheetMethods>(null);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/images/banner_2.jpg")}
        blurRadius={2}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.description}>
          A simple and elegant app for all your needs.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#333" }]}
          onPress={() => signUpRef.current?.open()}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => signIpRef.current?.open()}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet
        modal={false}
        height="70%"
        ref={signUpRef}
        style={{
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
        }}
      >
        <Text style={{ color: "#333" }}>Form Here</Text>
      </BottomSheet>

      <BottomSheet
        modal={false}
        height="70%"
        ref={signIpRef}
        style={{
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
        }}
      >
        <Text style={{ color: "#333" }}>Form Here</Text>
      </BottomSheet>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    position: "absolute",
    top: 0,
    padding: 50,
    width: width,
    height: height * 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "SFProDisplayBold",
    fontSize: normalize(24),
    color: "#333",
  },
  description: {
    fontFamily: "SFProDisplayRegular",
    fontSize: normalize(16),
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    padding: 50,
    width: width,
    height: height * 0.4,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 40,
  },
  buttonText: {
    fontFamily: "SFProDisplayRegular",
    fontSize: normalize(17),
    letterSpacing: 1,
  },
});
