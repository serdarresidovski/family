import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../firebase';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Send email verification
        userCredential.user.sendEmailVerification()
          .then(() => {
            setRegisterStatus("Registration successful. Verification email has been sent to your email address.");
          })
          .catch((error) => {
            console.log(error);
          });
          
        console.log("User registered successfully");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Full Name'
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder='Email'
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#fd8b8b',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    margin: 10,
  },
});

export default RegisterScreen;
