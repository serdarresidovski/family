import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [resetStatus, setResetStatus] = useState("");

  const handleResetPassword = () => {
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent
        setResetStatus("Reset email sent successfully!");
      })
      .catch((error) => {
        // Error sending password reset email
        setResetStatus("Error sending password reset email.");
      });
  };

  return (
    <View className="bg-[#ffe0d5] h-screen flex justify-center items-center">
      <View className="bg-slate-100 rounded-3xl p-10">
        <Text className="text-3xl text-slate-400 mb-5">
          <FontAwesome name="lock" color="" size={32} />
        </Text>
        <Text className="text-xl font-semibold text-slate-400 mb-5">
          Enter your email address:
        </Text>

        <TextInput
          placeholder="Family@member.com"
          className="bg-slate-200 h-12 w-64 rounded-3xl px-4 mb-5"
          value={email}
          onChangeText={setEmail}
        />

        {resetStatus ? (
          <Text style={{ color: resetStatus.startsWith("Reset email sent successfully") ? "green" : "red", marginBottom: 10 }}>
            {resetStatus}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={handleResetPassword}
          className="bg-teal-500 rounded-3xl h-12 w-64 mb-5 flex justify-center items-center"
        >
          <Text className="text-white font-bold text-lg">
            Send reset email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-slate-400 rounded-3xl h-12 w-64 flex justify-center items-center"
        >
          <Text className="text-white font-bold text-lg">
            Back to login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

