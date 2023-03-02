import React, { useState, useEffect } from "react";
import {
SafeAreaView,
Text,
TextInput,
TouchableOpacity,
View,
Image,
FlatList,
StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { firebase } from "../firebase";

const ShopScreen = () => {
const navigation = useNavigation();
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState(null);
const [items, setItems] = useState([]);
const [points, setPoints] = useState(10);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  pointsText: {
    marginLeft: 10,
    fontSize: 20,
  },
  formContainer: {
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2196f3",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottomMenu: {
    position: 'absolute',
    marginBottom : -5,
    bottom: 0,
    width: '100%',
  },
});


useEffect(() => {
getPermissionAsync();
}, []);

const getPermissionAsync = async () => {
if (Constants.platform.ios) {
const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (status !== "granted") {
alert("You have to provide camera roll access to add pictures!");
}
}
};

const addNewItem = () => {
if (name.trim() === "") {
alert("Enter a name for the item");
return;
}

const newItem = { id: Math.random().toString(), name, description, image };
setItems((prevItems) => [...prevItems, newItem]);

// Clear the form
setName("");
setDescription("");
setImage(null);
};

const pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.Images,
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});

if (!result.cancelled) {
  setImage(result.uri);
}
};

const onSubmit = async () => {
// Save the shop list to Firebase
try {
const db = firebase.firestore();
const userId = firebase.auth().currentUser.uid;
const docRef = db.collection("shopLists").doc();

await docRef.set({
  userId,
  name,
  description,
  items,
});

// Clear the form and item list
setName("");
setDescription("");
setImage(null);
setItems([]);
} catch (error) {
console.error(error);
}

};

return (

  <SafeAreaView className="bg-[#ffe0d5] h-screen">
  <View>
  <Text className="text-[#fd8b8b] flex self-center font-semibold text-4xl ">
    Family<Text className="text-[#32bea6] font-semibold text-4xl">GO</Text>
  </Text>
  </View>
  <View className="box-border border-2 border-slate-100 w-[80%] mt-10 flex justify-center self-center h-fit bg-slate-100 rounded-3xl">
<View style={styles.formContainer}/>

<Text className="text-xl mb-3 text-slate-400 font-bold self-center">
Task Manager
</Text>

<TextInput
       value={name}
       onChangeText={setName}
       placeholder="Enter name of item"
       className="self-center bg-slate-200 h-12 w-64 rounded-3xl px-4 mb-5"
     />

<TextInput
      value={description}
      onChangeText={setDescription}
      placeholder="Enter description of item"
      className="bg-slate-200 h-12 w-64 rounded-3xl px-4 mb-5 self-center"
    />

    <TextInput
      value={description}
      onChangeText={setDescription}
      placeholder="Enter description of item"
      className="bg-slate-200 h-12 w-64 rounded-3xl px-4 mb-5 self-center"
    />

    <TouchableOpacity onPress={pickImage} className="rounded-3xl h-12 w-64 self-center flex justify-center items-center bg-[#449dc0]">
      <Text className="text-xl self-center text-slate-100">Add Image</Text>
    </TouchableOpacity>

    {image && (
      <Image source={{ uri: image }} className="w-[200px] h-[200px] mt-[20px] self-center rounded-3xl" />
    )}

{/* width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center", */}

<TouchableOpacity onPress={addNewItem} className="rounded-3xl h-12 w-64 flex justify-center items-center mt-3 mb-5 bg-teal-500 self-center">
  <Text className="text-xl self-center text-slate-100">Publish Item</Text>
</TouchableOpacity>
</View>



<View style={ styles.bottomMenu}>
        <View
          style={{ flexDirection: "row", justifyContent: "space-around", height: 60 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("TaskPage")}
            style={{ alignItems: "center" }}
          >
            <EvilIcons name="chart" size={42} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShopScreen")}
            style={{ alignItems: "center" }}
          >
            <EvilIcons name="trophy" color="blue" size={42} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WelcomeScreen")}
            style={{ alignItems: "center" }}
          >
            <EvilIcons name="user" size={42} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;