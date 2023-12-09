import {
  Dimensions,
  Image,
  SafeAreaView,
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
import { TextInput } from "react-native-gesture-handler";

const dimensions = Dimensions.get("window");

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
        animationType="spring"
        height="60%"
        ref={signUpRef}
        style={{
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
        }}
      >
        <SignUp />
      </BottomSheet>

      <BottomSheet
        modal={false}
        animationType="slide"
        height="55%"
        ref={signIpRef}
        style={{
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
        }}
      >
        <SignIn />
      </BottomSheet>
    </View>
  );
};

export default index;

const SignUp = () => (
  <View style={stylesSignUp.container}>
    <Text style={stylesSignUp.header}>New Account</Text>
    <Text style={stylesSignUp.label}>Email</Text>
    <View style={stylesSignUp.inputContainer}>
      <TextInput
        style={stylesSignUp.label}
        keyboardType="email-address"
      />
    </View>
    <Text style={stylesSignUp.label}>Username</Text>
    <View style={stylesSignUp.inputContainer}>
      <TextInput
        style={stylesSignUp.label}
      />
    </View>
    <Text style={stylesSignUp.label}>Password</Text>
    <View style={stylesSignUp.inputContainer}>
      <TextInput
        style={stylesSignUp.label}
      />
    </View>
    <View style={stylesSignUp.buttonContainer}>
    <TouchableOpacity style={[stylesSignUp.button, { backgroundColor: "#333" }]}>
      <Text style={[stylesSignUp.buttonText, { color: '#fff' }]}>Sign Up</Text>
    </TouchableOpacity>
    </View>
  </View>
);

const SignIn = () => (
  <View style={stylesSignIn.container}>
    <Text style={stylesSignIn.header}>New Account</Text>
    <Text style={stylesSignIn.label}>Email</Text>
    <View style={stylesSignIn.inputContainer}>
      <TextInput
        style={stylesSignIn.label}
        keyboardType="email-address"
      />
    </View>
    <Text style={stylesSignUp.label}>Password</Text>
    <View style={stylesSignUp.inputContainer}>
      <TextInput
        style={stylesSignUp.label}
      />
    </View>
    <View style={stylesSignIn.buttonContainer}>
    <TouchableOpacity style={[stylesSignIn.button, { backgroundColor: "#333" }]}>
      <Text style={[stylesSignIn.buttonText, { color: '#fff' }]}>Sign Up</Text>
    </TouchableOpacity>
    </View>
  </View>
)

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
    width: dimensions.width,
    height: dimensions.height * 0.4,
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
    width: dimensions.width,
    height: dimensions.height * 0.4,
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

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    height: dimensions.height * 0.6,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    paddingTop: 25,
    fontSize: normalize(24),
    fontFamily: "SFProDisplayBold",
    width: dimensions.width * 0.4,
    paddingBottom: 40,
  },
  label: {
    fontSize: normalize(17),
    color: "#757575",
    fontFamily: "SFProDisplayMedium",
  },
  inputContainer: {
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  input: {
    fontSize: normalize(12),
    color: "#BDBDBD",
    fontFamily: "SFProDisplayRegular",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 20,
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

const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    height: dimensions.height * 0.6,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    paddingTop: 25,
    fontSize: normalize(24),
    fontFamily: "SFProDisplayBold",
    width: dimensions.width * 0.4,
    paddingBottom: 40,
  },
  label: {
    fontSize: normalize(17),
    color: "#757575",
    fontFamily: "SFProDisplayMedium",
  },
  inputContainer: {
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  input: {
    fontSize: normalize(12),
    color: "#BDBDBD",
    fontFamily: "SFProDisplayRegular",
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 20,
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
