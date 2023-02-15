import { View, Text, Pressable, TextInput, TouchableOpacity, MaskedViewIOS, Animated } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";


const TaskPage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  


  return (

    <SafeAreaView className="bg-[#ffe0d5] h-screen">
    <Text className="text-[#fd8b8b] flex self-center absolute top-12 font-semibold text-4xl ">
      Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text>
    </Text>

       <View className="box-border h-full w-5/6 self-center bg-slate-100  rounded-3xl mt-24">
        <TouchableOpacity className="text-3xl px-20 border-b-2 border-slate-200">
          <Text className="text-slate-300">
            Hej
          </Text>
        <Text className="text-slate-400 px-52 mb-4">
        <FontAwesome name="plus" size={20}/> 
        </Text>
        </TouchableOpacity>

        </View>

        {/*<TextInput
          color="#64748b"
          placeholder="Family@member.com"
          className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
        />
        <Text className="px-9 py-5 text-xl font-semibold text-slate-400">
          Password:
        </Text>

        <TextInput
          color="#64748b"
          placeholder="**********"
          secureTextEntry={true}
          className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
        />
        <TouchableOpacity className="border-slate-300 self-center py-2 px-5 rounded mt-8">
          <Text className="text-[#fd8b8b] font-semibold text-xl">Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" self-center mt-5 py-10 px-5">
          <Text className="text-slate-500 font-semibold text-xl">Register</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" self-center py-16 px-3">
          <View className="py-2">
            <Text className="text-slate-400">Forgot password</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default TaskPage;
