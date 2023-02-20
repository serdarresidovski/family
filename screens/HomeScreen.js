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
  const [loginStatus, setLoginStatus] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  

  const handleLogin = () => {
    firebase.signInWithEmailAndPassword(firebase.auth, email, password)
      .then(() => {
        console.log("User logged in successfully");
        navigation.replace("WelcomeScreen"); 
      })
      .catch((error) => {
        setLoginStatus("incorrect e-mail or password");
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
          placeholder="Enter your password"
          secureTextEntry={true}
          className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
          value={password}
          onChangeText={setPassword}
          />

      


      {loginStatus ? (
          <Text style={{ color: loginStatus.startsWith("incorrect e-mail or password") ? "red" : "red", marginBottom: 10, marginLeft: 30 }}>
            {loginStatus}
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

   
    <TouchableOpacity
  onPress={() => navigation.navigate("RegisterScreen")}
  style={{
    backgroundColor: "blue",
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
  New user? Register here!  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => navigation.navigate("ForgotPasswordScreen")}
  style={{
    backgroundColor: "orange",
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
  ForgotPasswordScreen  </Text>
</TouchableOpacity>

  </View>
</SafeAreaView>
);
};

export default HomeScreen;
