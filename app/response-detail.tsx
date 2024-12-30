import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

// Dummy responses data
const responses = [
  {
    id: 1,
    type: 'AGREE',
    author: 'John Doe',
    duration: '1:30',
    date: '01/30/2024',
    likes: 45,
  },
  {
    id: 2,
    type: 'DISAGREE',
    author: 'Jane Smith',
    duration: '2:15',
    date: '01/30/2024',
    likes: 32,
  },
];

export default function ResponseDetailScreen() {
  const { responseId } = useLocalSearchParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        {/* Main response player */}
        <View style={styles.mainResponse}>
          {/* TODO: Add main response player */}
        </View>

        {/* List of responses */}
        <View style={styles.responsesList}>
          <ThemedText style={styles.responsesTitle}>Responses</ThemedText>
          {responses.map((response) => (
            <View key={response.id} style={styles.responseCard}>
              <View style={styles.responseHeader}>
                <View style={styles.responseType}>
                  <ThemedText style={[
                    styles.responseTypeText,
                    { color: response.type === 'AGREE' ? '#4CAF50' : '#f44336' }
                  ]}>
                    {response.type}
                  </ThemedText>
                  <ThemedText style={styles.responseAuthor}>{response.author}</ThemedText>
                </View>
                <ThemedText style={styles.responseDate}>{response.date}</ThemedText>
              </View>
              
              <View style={styles.playerContainer}>
                <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
                  <Ionicons 
                    name={isPlaying ? "pause-circle" : "play-circle"} 
                    size={32} 
                    color="#0a7ea4" 
                  />
                </TouchableOpacity>
                
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={1}
                  value={currentProgress}
                  onValueChange={setCurrentProgress}
                  minimumTrackTintColor="#0a7ea4"
                  maximumTrackTintColor="#666"
                  thumbTintColor="#0a7ea4"
                />
                
                <ThemedText style={styles.duration}>{response.duration}</ThemedText>

                <TouchableOpacity style={styles.likeButton}>
                  <Ionicons name="thumbs-up-outline" size={18} color="#666" />
                  <ThemedText style={styles.likesCount}>{response.likes}</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
  },
  mainResponse: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2D3235',
  },
  responsesList: {
    padding: 20,
  },
  responsesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ECEDEE',
    marginBottom: 20,
  },
  responseCard: {
    backgroundColor: '#1A1D1E',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  responseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  responseType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  responseTypeText: {
    fontWeight: '600',
    fontSize: 13,
  },
  responseAuthor: {
    color: '#9BA1A6',
    fontSize: 13,
  },
  responseDate: {
    color: '#666',
    fontSize: 12,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  slider: {
    flex: 1,
    height: 32,
  },
  duration: {
    color: '#666',
    fontSize: 12,
    width: 40,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likesCount: {
    color: '#666',
    fontSize: 12,
  },
}); 