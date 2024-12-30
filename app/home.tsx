import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Dummy data for topics
const topics = [
  {
    id: 1,
    type: 'TOPIC',
    author: 'Dave Chapel',
    title: 'We should stop AI development',
    responses: 325,
    date: '01/30/2024'
  },
  {
    id: 2,
    type: 'TOPIC',
    author: 'John Doe',
    title: 'Electric cars are overrated',
    responses: 248,
    date: '01/29/2024'
  },
  {
    id: 3,
    type: 'TOPIC',
    author: 'Jane Smith',
    title: 'Social media is destroying society',
    responses: 512,
    date: '01/28/2024'
  },
  {
    id: 4,
    type: 'TOPIC',
    author: 'Mike Johnson',
    title: 'Cryptocurrency is a bubble',
    responses: 423,
    date: '01/27/2024'
  },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>All Topics</ThemedText>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {topics.map((topic) => (
          <TouchableOpacity 
            key={topic.id} 
            style={styles.topicCard}
            onPress={() => {
              router.push({
                pathname: '/topic-detail',
                params: {
                  title: topic.title,
                  author: topic.author,
                  date: topic.date
                }
              });
            }}
          >
            <View style={styles.topicHeader}>
              <ThemedText style={styles.topicType}>{topic.type}</ThemedText>
              <ThemedText style={styles.topicAuthor}>{topic.author}</ThemedText>
            </View>
            
            <View style={styles.topicContent}>
              <ThemedText style={styles.topicTitle}>{topic.title}</ThemedText>
              <View style={styles.topicFooter}>
                <ThemedText style={styles.topicDate}>{topic.date}</ThemedText>
                <View style={styles.responseContainer}>
                  <ThemedText style={styles.responseCount}>{topic.responses} responses</ThemedText>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ECEDEE',
  },
  scrollView: {
    flex: 1,
  },
  topicCard: {
    backgroundColor: '#1A1D1E',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topicType: {
    color: '#0a7ea4',
    fontWeight: '600',
    fontSize: 14,
    marginRight: 10,
  },
  topicAuthor: {
    color: '#9BA1A6',
    fontSize: 14,
  },
  topicContent: {
    gap: 10,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ECEDEE',
  },
  topicFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  topicDate: {
    color: '#9BA1A6',
    fontSize: 12,
  },
  responseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  responseCount: {
    color: '#9BA1A6',
    fontSize: 12,
  },
}); 