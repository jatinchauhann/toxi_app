import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    // TODO: Implement actual authentication logic
    if (isLogin) {
      // Navigate to home screen after successful login
      router.replace('/home');
    } else {
      // Handle signup logic
      console.log('Signing up...', { email, username, password });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          TOXI
        </ThemedText>
        <ThemedText style={styles.tagline}>
          Fight over anything
        </ThemedText>
      </ThemedView>
      
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      )}
      
      <TextInput
        style={styles.input}
        placeholder={isLogin ? "Email or Username" : "Email"}
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <ThemedText style={styles.buttonText}>
          {isLogin ? 'Login' : 'Sign Up'}
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <ThemedText style={styles.switchText}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 4,
    lineHeight: 50,
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif-condensed',
    }),
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0a7ea4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    marginTop: 20,
    color: '#0a7ea4',
  },
}); 