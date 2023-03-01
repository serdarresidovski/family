import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../firebase";
import EvilIcons from '@expo/vector-icons/EvilIcons';

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
          Welcome to FamilyGO!
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Mediation")}
        style={{
          // backgroundColor: "#61dafb",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Message
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("BonusSystem")}
        style={{
          // backgroundColor: "#ff6b6b",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Bonus System
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("InviteFamily")}
        style={{
          // backgroundColor: "#50c878",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Invite Family
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Subscription")}
        style={{
          // backgroundColor: "#ffb6c1",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Subscription
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        style={{
          // backgroundColor: "#e6e6e6",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 30,
          paddingRight: 20,
        }}
      >
       
       <Text
      style={{
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "left",
      }}
    >
      Add Task
    </Text>
    <EvilIcons name="chevron-right" size={30} color="black" />
  </TouchableOpacity>

  {/* <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        style={{
          // backgroundColor: "#ffb6c1",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          AddTask
        </Text>
      </TouchableOpacity> */}

  <TouchableOpacity
        onPress={() => navigation.navigate("Help")}
        style={{
          // backgroundColor: "#ffb6c1",
          padding: 10,
          borderRadius: 20,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          Help
        </Text>
      </TouchableOpacity>

  <TouchableOpacity
    onPress={handleLogout}
    style={{
      // backgroundColor: "red",
      padding: 10,
      borderRadius: 20,
      width: "100%",
      marginBottom: 10,
    }}
  >
    <Text
      style={{
        color: "red",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Logout
    </Text>
  </TouchableOpacity>
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