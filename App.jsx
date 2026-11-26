import { StatusBar } from "expo-status-bar";
import { View,SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import globalStyles from "./styles/global";
export default function App() {
  return (
    <SafeAreaView style={globalStyles.appContainer}>

    <View style={globalStyles.appSubContainer}>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
    </SafeAreaView>
  );
}
