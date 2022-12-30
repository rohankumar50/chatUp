import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Chat from "./screens/Chat";
import Login from "./screens/Login";

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Chat" component={Chat} /> */}
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({});
