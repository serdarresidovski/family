import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { firebase } from "../firebase";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogout = () => {
    firebase.auth.signOut().then(() => {
      console.log("Logged out successfully");
      navigation.replace("HomeScreen");
    }).catch((error) => {
      console.log(error);
    });
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
        Welcome to FamilyGO!
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#fd8b8b",
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 10,
          borderRadius: 20,
          width: "80%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
