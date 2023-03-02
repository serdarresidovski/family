import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../firebase";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Image } from 'react-native';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

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
    <SafeAreaView className="bg-[#ffe0d5] h-screen">
      <View style={{ flex: 1 }}>
      <Text className="text-[#fd8b8b] flex self-center font-semibold text-4xl ">
        Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text>
      </Text>
      </View>

      <Image
  source={require('../img/IMG_8956.jpg')}
  style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 30, borderRadius: 50 }}
/>


      <View className="bg-[#ffe0d5] flex mb-[10%] items-center">
      <View className="bg-slate-100 h-fit rounded-3xl w-[80%] p-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("Mediation")}
        className="w-full self-center mb-5"
        >
          <Text
            className="text-2xl self-center font-bold text-slate-500"
          >
          Message
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("BonusSystem")}
        className="w-full self-center mb-5"
        >
          <Text
            className="text-2xl self-center font-bold text-slate-500"
          >
          Bonus System
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("InviteFamily")}
        className="w-full self-center mb-5"
        >
          <Text
            className="text-2xl self-center font-bold text-slate-500"
          >
          Invite Family
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Subscription")}
        className="w-full self-center mb-5"
        >
          <Text
            className="text-2xl self-center font-bold text-slate-500"
          >
          Subscription
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        className="w-full self-center mb-5"
        >
          <Text
            className="text-2xl self-center font-bold text-slate-500"
          >
      Add Task
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
        onPress={() => navigation.navigate("Help")}
        className="w-full self-center mb-5"
        >
          <Text
            className="text-2xl self-center font-bold text-slate-500"
          >
          Help
        </Text>
      </TouchableOpacity>

  <TouchableOpacity
    onPress={handleLogout}
    className="box-border rounded-3xl self-center w-2/3 bg-red-300 mt-[20%]"
  >
    <Text
      className="text-2xl self-center font-bold text-slate-50"
    >
      Logout
    </Text>
  </TouchableOpacity>
  </View>
  </View>


  <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 35 }}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("TaskPage")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="eye" size={42} color="black" />
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
            <EvilIcons name="user" size={42} color="blue" />
          </TouchableOpacity>
        </View>

</SafeAreaView>
);
};

export default WelcomeScreen;