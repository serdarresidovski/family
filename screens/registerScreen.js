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
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!emailRegex.test(email)) {
      setRegisterStatus("Please enter a valid email address");
      return;
    }
  
    if (!passwordRegex.test(password)) {
      setRegisterStatus(
        "Password must be at least 8 characters long, contain at least one letter, one number and one special characters"
      );
      return;
    }

    firebase
      .createUserWithEmailAndPassword(firebase.auth, email, password)
      .then(() => {
        navigation.replace("WelcomeScreen"); 
        setRegisterStatus("Registration successful");
        console.log("User registered successfully");
      })
      .catch((error) => {
        setRegisterStatus(error.message);
        console.log(error);
      });
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

        {registerStatus ? (
          <Text style={{ color: registerStatus.startsWith("Registration successful") ? "green" : "red", marginBottom: 10, marginLeft: 30 }}>
            {registerStatus}
          </Text>
        ) : null}




    

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
  onPress={() => navigation.navigate("HomeScreen")}
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
    Already a user? Login here!
  </Text>
</TouchableOpacity>
  </View>
</SafeAreaView>
);
};

export default HomeScreen;
