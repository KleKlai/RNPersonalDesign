import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import Colors from "../constants/Colors";

type SvgType = {
  width: number,
  height: number,
  path: string
}

const StyledSvg = ({ width, height, path}: SvgType) => {
  const theme = useColorScheme() ?? "light";
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 20 20">
        <Path
          d={path}
          fill={ theme === "light" ? Colors.light.text : Colors.dark.text }
        />
      </Svg>
    </View>
  );
};

export default StyledSvg;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
});
