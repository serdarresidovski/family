import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#ffe0d5] h-screen">
     <Text className="text-[#fd8b8b] flex self-center absolute top-12 font-semibold text-4xl ">Family<Text className="text-[#32bea6] text-black-300 font-semibold text-4xl">GO</Text></Text>
    
    <View className="border-b-2 border-slate-300 py-7"/>

    <View className="box-border-3 box-slate-300 flex self-center text-2xl py-48">
      <Text className="">
        hej
      </Text>
    </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
