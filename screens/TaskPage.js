import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../firebase";
import EvilIcons from '@expo/vector-icons/EvilIcons';

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

    <View className="">

    </View>
     
     
      <View className="top-96 mt-80">
      <View style={{ height: 10, marginVertical: 20, paddingBottom: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 60 }}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("TaskPage")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="chart" size={42} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate("ShopScreen")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="trophy" color="black" size={42}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate("WelcomeScreen")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="user" size={42} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default TaskPage;