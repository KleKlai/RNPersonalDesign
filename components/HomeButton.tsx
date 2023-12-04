import { Pressable, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Dimensions } from "react-native";
import { Text, View, useThemeColor } from "./Themed";
import { normalize } from "../lib/fontNormilize";
import Colors from "../constants/Colors";

const HomeButton = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={{ padding: 20 }}>
      <Link
        href="/"
        style={[
          styles.button,
          { backgroundColor: theme === "light" ? Colors.light.text : Colors.dark.text },
        ]}
        asChild
      >
        <Pressable>
          <Text
            style={{ fontSize: normalize(17), fontWeight: "600" }}
            lightColor={Colors.dark.text}
            darkColor={Colors.light.text}
          >
            Go Home
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 30,
    width: Dimensions.get("window").width * 0.7, // 70% width of the screen
    alignItems: "center",
  },
});
