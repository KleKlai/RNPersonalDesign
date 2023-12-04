import { StatusBar } from "expo-status-bar";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import HomeButton from "../components/HomeButton";
import StyledSvg from "../components/StyledSvg";
import { normalize } from "../lib/fontNormilize";
import { useLocalSearchParams } from "expo-router";

const ModalScreen = () => {
  const data = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StyledSvg
        width={Dimensions.get("screen").width * 0.4}
        height={Dimensions.get("screen").width * 0.4}
        path="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.button}>
        <HomeButton />
      </View>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  button: {
    position: "absolute",
    bottom: 30,
  },
  title: {
    fontSize: normalize(24),
    fontFamily: 'SFProDisplayBold',
  },
  description: {
    fontSize: normalize(15),
    fontFamily: 'SFProDisplayRegular',
  },
});
