import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { MapPin, Building, Briefcase } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const mockVagas = [
  { id: '1', title: 'Jovem Aprendiz Administrativo', company: 'Tech Solutions', location: 'Belo Horizonte, MG', match: '95%' },
  { id: '2', title: 'Assistente de TI', company: 'Innova Software', location: 'Contagem, MG', match: '88%' },
];

export default function VagasScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof mockVagas[0] }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.company}><Building size={14} color={Colors.textLight} /> {item.company}</Text>
        </View>
        <View style={styles.matchBadge}>
          <Text style={styles.matchText}>{item.match} Match</Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.location}><MapPin size={14} color={Colors.textLight} /> {item.location}</Text>
        <TouchableOpacity style={styles.applyButton} onPress={() => router.push(`/vaga/${item.id}`)}>
          <Text style={styles.applyButtonText}>Ver Vaga</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Vagas Recomendadas</Text>
      <FlatList
        data={mockVagas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    margin: 16,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 4,
  },
  company: {
    fontSize: 14,
    color: Colors.textLight,
  },
  matchBadge: {
    backgroundColor: 'rgba(16,185,129,0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  matchText: {
    color: Colors.success,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    paddingTop: 12,
  },
  location: {
    fontSize: 14,
    color: Colors.textLight,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
