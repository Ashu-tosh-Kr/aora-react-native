import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-red-200">
      <Text className="text-3xl font-pblack">baby!</Text>
      <Link href="/profile">About</Link>
      <StatusBar style="auto" />
    </View>
  );
}
