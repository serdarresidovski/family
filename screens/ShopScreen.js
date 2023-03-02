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
alert("Lak mannen ge tillstånd!");
}
}
};

const addNewItem = () => {
if (name.trim() === "") {
alert("Please enter a name for the item");
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
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>Welcome to FamilyGO! ShopScreen</Text>
<View style={styles.pointsContainer}>
<EvilIcons name="trophy" color="gold" size={24} />
<Text style={styles.pointsText}>{points}</Text>
</View>
</View>
<View style={styles.formContainer}/>
<TextInput
       value={name}
       onChangeText={setName}
       placeholder="Enter name of item"
       style={styles.textInput}
     />

<TextInput
      value={description}
      onChangeText={setDescription}
      placeholder="Enter description of item"
      style={styles.textInput}
    />

    <TouchableOpacity onPress={pickImage} style={styles.button}>
      <Text style={styles.buttonText}>Add Image</Text>
    </TouchableOpacity>

    {image && (
      <Image source={{ uri: image }} style={styles.image} />
    )}

<TouchableOpacity onPress={addNewItem} style={{ margin: 10 }}>
  <Text style={{ fontSize: 20, color: "blue" }}>Add Item</Text>
</TouchableOpacity>




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