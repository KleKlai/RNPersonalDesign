import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import HomeButton from "../components/HomeButton";
import Svg, { Path } from "react-native-svg";
import StyledSvg from "../components/StyledSvg";
import { normalize } from "../lib/fontNormilize";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StyledSvg
        width={Dimensions.get("screen").width * 0.4}
        height={Dimensions.get("screen").width * 0.4}
        path="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
      />
      <Text
        style={{
          fontSize: normalize(24),
          fontWeight: "500",
        }}
      >
        Payment successful!
      </Text>
      <Text
        style={{
          fontSize: normalize(24),
          fontWeight: "500",
          padding: 5,
        }}
      >
        $400.0 USD
      </Text>
      <Text
        style={{
          fontSize: normalize(15),
          fontWeight: "200",
          textAlign: "center",
        }}
      >
        has been sent to Maynard from your wallet
      </Text>
      <HomeButton />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
