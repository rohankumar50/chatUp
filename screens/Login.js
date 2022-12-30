import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/login.jpg")}
          style={styles.header_image}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.formContainer}>
        <Text>form</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: "40%",
    backgroundColor: "grey",
  },
  header_image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 50,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
});
