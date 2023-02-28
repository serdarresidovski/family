import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../firebase";
import EvilIcons from '@expo/vector-icons/EvilIcons';

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
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
          Welcome to FamilyGO!
        </Text>
      </View>
     
      <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: "#fd8b8b",
            padding: 10,
            borderRadius: 20,
            width: "100%",
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
      </View>
      <View style={{ height: 10, marginVertical: 20, paddingBottom: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 60 }}>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <EvilIcons name="chart" size={42} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <EvilIcons name="trophy" color="black" size={42}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <EvilIcons name="user" size={42} color="black" />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default WelcomeScreen;