import { View, Text, Pressable, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { firebase } from "../firebase";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
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
        navigation.replace("TaskPage"); 
        setRegisterStatus("Registration successful");
        console.log("User registered successfully");
      })
      .catch((error) => {
        setRegisterStatus("This email is already in use");
      });
  };
  


  
  

  return (
    <SafeAreaView className="bg-[#ffe0d5] h-screen">
      <Text className="text-[#fd8b8b] flex self-center font-semibold text-4xl ">
        Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text>
      </Text>

      <View className="bg-[#ffe0d5] h-screen flex mt-[30%] items-center">
      <View className="bg-slate-100 h-fit rounded-3xl p-10">
        <Text className="text-3xl font-semibold text-slate-400 mb-5 self-center">
          Register
        </Text>
        

        <TextInput
          color="#64748b"
          placeholder="Enter your name"
          className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          color="#64748b"
          placeholder="Enter your email"
          className="box-border mt-3 h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          color="#64748b"
          placeholder="Enter your password"
          secureTextEntry={true}
          className="box-border h-12 mt-3 w-64 px-4 self-center bg-slate-200 rounded-3xl"
          value={password}
          onChangeText={setPassword}
          />

        {registerStatus ? (
          <View className="mt-3 px-4 flex justify-center items-center rounded-3xl">
          <Text className="w-52 self-center " style={{ color: registerStatus.startsWith("Registration successful") ? "green" : "red"}}>
            {registerStatus}
          </Text>
          </View>
        ) : null}

    <Pressable
      onPress={handleRegister}
      className="rounded-3xl h-12 w-64 mb-5 flex justify-center items-center bg-teal-500 mt-10"
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
  className="rounded-3xl h-12 w-64 flex justify-center items-center bg-[#449dc0]"
>
  <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
    Already a user?
  </Text>
</TouchableOpacity>
  </View>
  </View>
</SafeAreaView>
);
};

export default RegisterScreen;
