import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type SvgType = {
  width: number,
  height: number,
  path: string
}

const StyledSvg = ({ width, height, path}: SvgType) => {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 20 20">
        <Path
          d={path}
          // d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
          fill="#000"
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
