import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-white text-lg">MeetUp !</Text>
      <StatusBar style="auto" />
    </View>
  );
}