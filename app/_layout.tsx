import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="home" 
        options={{ 
          headerTitle: 'Home',
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#151718', // Dark background
          },
          headerTintColor: '#fff', // White text
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => router.replace('/')}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="log-out-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="topic-detail" 
        options={{ 
          headerTitle: 'Responses',
          headerStyle: {
            backgroundColor: '#151718', // Dark background
          },
          headerTintColor: '#fff', // White text
        }} 
      />
      <Stack.Screen 
        name="response-detail" 
        options={{ 
          headerTitle: 'Response Details',
          headerStyle: {
            backgroundColor: '#151718',
          },
          headerTintColor: '#fff',
        }} 
      />
    </Stack>
  );
} 