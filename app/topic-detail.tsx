import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { router } from 'expo-router';

// Dummy response data
const responses = [
  {
    id: 1,
    type: 'AGREE',
    author: 'Dave Chapel',
    duration: '2:30',
    date: '01/30/2024',
    likes: 45,
  },
  {
    id: 2,
    type: 'DISAGREE',
    author: 'Joe Rogan',
    duration: '1:45',
    date: '01/30/2024',
    likes: 32,
  },
  {
    id: 3,
    type: 'DISAGREE',
    author: 'Elon Musk',
    duration: '0:45',
    date: '01/30/2024',
    likes: 89,
  },
];

export default function TopicDetailScreen() {
  const { title, author, date } = useLocalSearchParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <View style={styles.topicHeader}>
          <ThemedText style={styles.topicTitle}>{title}</ThemedText>
          <View style={styles.authorInfo}>
            <ThemedText style={styles.author}>{author}</ThemedText>
            <ThemedText style={styles.date}>{date}</ThemedText>
          </View>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="thumbs-up-outline" size={24} color="#0a7ea4" />
              <ThemedText style={styles.actionText}>Like</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={24} color="#0a7ea4" />
              <ThemedText style={styles.actionText}>Share</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.recordButton]}>
              <Ionicons name="radio-button-on" size={16} color="#f44336" />
              <ThemedText style={styles.recordText}>Record</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.responsesSection}>
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
  topicHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2D3235',
  },
  topicTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ECEDEE',
    marginBottom: 10,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  author: {
    color: '#9BA1A6',
    marginRight: 10,
  },
  date: {
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  actionText: {
    color: '#0a7ea4',
    marginTop: 5,
  },
  recordButton: {
    backgroundColor: '#1A1D1E',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f44336',
  },
  recordText: {
    color: '#f44336',
    fontWeight: '600',
    fontSize: 14,
  },
  responsesSection: {
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
    marginBottom: 15,
  },
  responseType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  responseTypeText: {
    fontWeight: '700',
    marginRight: 10,
  },
  responseAuthor: {
    color: '#9BA1A6',
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