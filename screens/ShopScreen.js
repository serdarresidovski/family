//skaffa som kategorier/boxar två och två, lektronik, leksaker, mat osv sen när man trycker isg in i dem ska det finnas ett x antal st ksk 6 st som upptaeras efter varje månad/kvaretal

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../firebase";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const ShopScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
          Welcome to FamilyGO!
          ShopScreen
        </Text>
      </View>
     
     
      
      <View style={{ height: 10, marginVertical: 20, paddingBottom: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 60 }}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("TaskPage")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="chart" size={42} color="black" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate("ShopScreen")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="trophy" color="blue" size={42}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate("WelcomeScreen")} 
            style={{ alignItems: 'center' }}
          >
            <EvilIcons name="user" size={42} color="black" />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default ShopScreen;