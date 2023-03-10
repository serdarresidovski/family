import { View, Text, Pressable, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { firebase } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleRegister = () => {
    firebase.createUserWithEmailAndPassword(firebase.auth, email, password)
      .then(() => {
        setRegisterStatus("Registration successful");
        console.log("User registered successfully");
      })
      .catch((error) => {
        setRegisterStatus(error.message);
        console.log(error);
      });
  };

  const handleLogin = () => {
    firebase.signInWithEmailAndPassword(firebase.auth, email, password)
      .then(() => {
        console.log("User logged in successfully");
        navigation.replace("WelcomeScreen"); // replace current screen with WelcomeScreen
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };
  

  return (
    <SafeAreaView className="bg-[#ffe0d5] h-screen">
      <Text className="text-[#fd8b8b] flex self-center absolute top-12 font-semibold text-4xl ">
        Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text>
      </Text>

      <View className="box-border h-full w-5/6 self-center bg-slate-100  rounded-3xl mt-24">
        <Text className="text-3xl text-slate-400 px-9 mt-10 mb-10">
          <FontAwesome name="lock" color="" size={32} />
        </Text>
        <Text className="px-9 py-5 text-xl font-semibold text-slate-400">
          Email:
        </Text>

        <TextInput
          color="#64748b"
          placeholder="Family@member.com"
          className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
          value={email}
          onChangeText={setEmail}
        />
        <Text className="px-9 py-5 text-xl font-semibold text-slate-400">
          Password:
        </Text>

        <TextInput
          color="#64748b"
          placeholder="**"
          secureTextEntry={true}
          className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
          value={password}
          onChangeText={setPassword}
          />

        {registerStatus ? (
          <Text style={{ color: registerStatus.startsWith("Registration successful") ? "green" : "red", marginBottom: 10, marginLeft: 30 }}>
            {registerStatus}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={handleLogin}
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
                Login
                </Text>
                </TouchableOpacity>

    <Pressable
      onPress={handleRegister}
      style={{
        backgroundColor: "#32bea6",
        marginTop: 10,
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
        Register
      </Text>
    </Pressable>
    <TouchableOpacity
  onPress={() => navigation.navigate("ForgotPasswordScreen")}
  style={{
    backgroundColor: "#fd8b8b",
    borderRadius: 20,
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  }}
>
  <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
    Forgot password
  </Text>
</TouchableOpacity>
  </View>
</SafeAreaView>
);
};

export default HomeScreen;
