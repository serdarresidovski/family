// import { View, Text, Pressable, TextInput, TouchableOpacity } from "react-native";
// import React, { useLayoutEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { firebase } from "../firebase";

// const ForgotPasswordScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [resetStatus, setResetStatus] = useState("");

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: "Forgot Password",
//       headerTitleAlign: "center",
//     });
//   }, [navigation]);

//   const handleResetPassword = () => {
//     firebase.sendPasswordResetEmail(firebase.auth, email)
//       .then(() => {
//         setResetStatus("Reset email sent successfully");
//         console.log("Reset email sent successfully");
//       })
//       .catch((error) => {
//         setResetStatus(error.message);
//         console.log(error);
//       });
//   };

//   return (
//     <SafeAreaView className="bg-[#ffe0d5] h-screen">
//       <View className="box-border h-full w-5/6 self-center bg-slate-100  rounded-3xl mt-24">
//         <Text className="text-3xl text-slate-400 px-9 mt-10 mb-10">
//           <FontAwesome name="lock" color="" size={32} />
//         </Text>
//         <Text className="px-9 py-5 text-xl font-semibold text-slate-400">
//           Enter your email address:
//         </Text>

//         <TextInput
//           color="#64748b"
//           placeholder="Family@member.com"
//           className="box-border h-12 w-64 px-4 self-center bg-slate-200 rounded-3xl"
//           value={email}
//           onChangeText={setEmail}
//         />

//         {resetStatus ? (
//           <Text style={{ color: resetStatus.startsWith("Reset email sent successfully") ? "green" : "red", marginBottom: 10, marginLeft: 30 }}>
//             {resetStatus}
//           </Text>
//         ) : null}

//         <TouchableOpacity
//           onPress={handleResetPassword}
//           style={{
//             backgroundColor: "#32bea6",
//             borderRadius: 10,
//             height: 40,
//             width: 200,
//             alignItems: "center",
//             justifyContent: "center",
//             alignSelf: "center",
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
//             Send reset email
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={{
//             backgroundColor: "#64748b",
//             borderRadius: 10,
//             height: 40,
//             width: 200,
//             alignItems: "center",
//             justifyContent: "center",
//             alignSelf: "center",
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
//             Back to login
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ForgotPasswordScreen;


import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { firebase } from "../firebase";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogout = () => {
    firebase.signOut()
    .then(() => {
        console.log("Logged out successfully");
        navigation.replace("HomeScreen");
      }).catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
        Welcome to FamilyGO!
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#fd8b8b",
          marginTop: 30,
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
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
