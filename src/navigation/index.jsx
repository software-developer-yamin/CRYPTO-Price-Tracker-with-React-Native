import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabsNavigator} />
      <Stack.Screen name="CoinDetailed" component={CoinDetailedScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
