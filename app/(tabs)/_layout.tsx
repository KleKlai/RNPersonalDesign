import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="two"
        options={{
          title: "Settings",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          headerShown: true,
          title: "Add Transaction",
          headerTitleAlign: "center",
          presentation: "modal"
        }}
      />
    </Stack>
  );
}
