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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
          Welcome to FamilyGO!
          TaskPage
        </Text>
      </View>
     
     
      
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

    </SafeAreaView>
  );
};

export default TaskPage;

// import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { firebase } from "../firebase";

// import "firebase/firestore";


// import EvilIcons from '@expo/vector-icons/EvilIcons';

// const TaskPage = () => {
//   const navigation = useNavigation();
//   const [tasks, setTasks] = useState([]);
//   const [newTaskName, setNewTaskName] = useState("");
//   const [newTaskDescription, setNewTaskDescription] = useState("");
//   const [newTaskPoints, setNewTaskPoints] = useState("");

//   const addTask = async () => {
//     const taskRef = firebase.firestore().collection("tasks").doc();
//     await taskRef.set({
//       name: newTaskName,
//       description: newTaskDescription,
//       points: parseInt(newTaskPoints),
//     });
//     setNewTaskName("");
//     setNewTaskDescription("");
//     setNewTaskPoints("");
//   };
  
//   const getTasks = () => {
//     firebase.firestore().collection("tasks").onSnapshot((snapshot) => {
//       const tasksList = snapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setTasks(tasksList);
//     });
//   };
  

//   useState(() => {
//     getTasks();
//   }, []);

//   const totalPoints = tasks.reduce((accumulator, task) => accumulator + task.points, 0);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <Text style={{ fontSize: 32, fontWeight: "bold", margin: 20 }}>
//           Welcome to FamilyGO! TaskPage
//         </Text>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
//           <TextInput
//             style={{ flex: 1, marginRight: 10 }}
//             placeholder="Task name"
//             value={newTaskName}
//             onChangeText={(text) => setNewTaskName(text)}
//           />
//           <TextInput
//             style={{ flex: 1, marginRight: 10 }}
//             placeholder="Task description"
//             value={newTaskDescription}
//             onChangeText={(text) => setNewTaskDescription(text)}
//           />
//           <TextInput
//             style={{ flex: 1 }}
//             placeholder="Task points"
//             value={newTaskPoints}
//             onChangeText={(text) => setNewTaskPoints(text)}
//             keyboardType="numeric"
//           />
//           <TouchableOpacity onPress={addTask}>
//             <Text style={{ color: "blue", fontWeight: "bold" }}>Add task</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={{ fontSize: 24, margin: 20 }}>Total points: {totalPoints}</Text>
//         {tasks.map((task) => (
//           <View key={task.id} style={{ margin: 20 }}>
//             <Text style={{ fontSize: 20, fontWeight: "bold" }}>{task.name}</Text>
//             <Text style={{ fontSize: 16 }}>{task.description}</Text>
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
//               <EvilIcons name="star" size={24} color="#FFD700" style={{ marginRight: 5 }} />
//               <Text style={{ fontSize: 18 }}>{task.points} points</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default TaskPage;
