import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WatchListProvider from "./src/contexts/WatchListContext";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <WatchListProvider>
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="light" />
        </View>
      </WatchListProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
