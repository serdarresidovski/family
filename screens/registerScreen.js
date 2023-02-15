import { View, Text, Pressable, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from '@expo/vector-icons/FontAwesome';



const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#ffe0d5] h-screen">
     <Text className="text-[#fd8b8b] flex self-center absolute top-12 font-semibold text-4xl ">Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text></Text>
    
    <View className="box-border h-full w-5/6 self-center bg-slate-100  rounded-3xl mt-24">

      <Text className="text-3xl text-slate-400 px-9 mt-10 mb-10">
      <FontAwesome name="user-plus" color="" size={32}/>
      </Text>
    <Text className="px-9 py-5 text-xl font-semibold text-slate-400">Email:</Text>

    <TextInput color="#64748b" placeholder="Family@member.com" className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl" />
    <Text className="px-9 py-5 text-xl font-semibold text-slate-400">Password:</Text>

    <TextInput color="#64748b" placeholder="**********" secureTextEntry={true} className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl" />
    <Pressable className="border-slate-300 self-center py-2 px-5 rounded mt-8">
      <Text className="text-[#fd8b8b] font-semibold text-xl">Register</Text>
      </Pressable>

      <Pressable className="border-t-2  border-slate-300 self-center mt-5 py-5 px-5">
      <Text className="text-[#fd8b8b] font-semibold text-xl">Login</Text>
      </Pressable>

      <Pressable className="border-t-2  border-slate-300 self-center py-2 px-3">
      <View className="px-4 flex flex-row space-x-10 py-2">
      <FontAwesome name="facebook" size={32} color="#bbbbbb" />
        <FontAwesome name="google" size={32} color="#bbbbbb" />
        <FontAwesome name="apple" size={32} color="#bbbbbb" />
      </View>
      </Pressable>

    </View>


    
      
    
    
    </SafeAreaView>
  );
};

export default HomeScreen;
