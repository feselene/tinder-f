import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SignupScreen: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

//   const handleSignup = () => {
//     if (!email.includes('@')) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address.');
//       return;
//     }
//     if (password.length < 6) {
//       Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
//       return;
//     }
//     if (username.trim() === '') {
//       Alert.alert('Invalid Username', 'Username cannot be empty.');
//       return;
//     }

//     // Signup logic goes here
//     console.log('Email:', email, 'Password:', password, 'Username:', username);
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default SignupScreen;
