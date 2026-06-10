import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Building, MapPin, Clock, DollarSign, ChevronLeft, CheckCircle } from 'lucide-react-native';

export default function VagaDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Mock data baseada no ID
  const vaga = {
    title: id === '2' ? 'Assistente de TI' : 'Jovem Aprendiz Administrativo',
    company: id === '2' ? 'Innova Software' : 'Tech Solutions',
    location: id === '2' ? 'Contagem, MG' : 'Belo Horizonte, MG',
    match: id === '2' ? '88%' : '95%',
    salary: 'R$ 850,00',
    workload: '4 horas diárias',
    description: 'Buscamos jovens engajados para auxiliar nas rotinas diárias da empresa. Você terá a oportunidade de aprender na prática e desenvolver habilidades essenciais para o mercado de trabalho, com total apoio do Programa Descubra.',
    requirements: [
      'Estar cursando ou ter concluído o Ensino Médio',
      'Idade entre 14 e 24 anos',
      'Conhecimentos básicos de informática',
      'Vontade de aprender e crescer'
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft size={28} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes da Vaga</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topSection}>
          <View style={styles.matchBadge}>
            <Text style={styles.matchText}>{vaga.match} Match com seu perfil</Text>
          </View>
          <Text style={styles.title}>{vaga.title}</Text>
          <Text style={styles.company}>{vaga.company}</Text>
        </View>

        <View style={styles.infoCardsRow}>
          <View style={styles.infoCard}>
            <MapPin size={20} color={Colors.orange} />
            <Text style={styles.infoText}>{vaga.location}</Text>
          </View>
          <View style={styles.infoCard}>
            <DollarSign size={20} color={Colors.success} />
            <Text style={styles.infoText}>{vaga.salary}</Text>
          </View>
          <View style={styles.infoCard}>
            <Clock size={20} color={Colors.sky} />
            <Text style={styles.infoText}>{vaga.workload}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre a Vaga</Text>
          <Text style={styles.paragraph}>{vaga.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          {vaga.requirements.map((req, index) => (
            <View key={index} style={styles.listItem}>
              <CheckCircle size={16} color={Colors.success} style={styles.listIcon} />
              <Text style={styles.listText}>{req}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 32) }]}>
        <TouchableOpacity style={styles.applyButton} onPress={() => {
          alert('Candidatura enviada com sucesso! O técnico de referência será notificado.');
          router.back();
        }}>
          <Text style={styles.applyButtonText}>Candidatar-se agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    backgroundColor: Colors.backgroundCard,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  matchBadge: {
    backgroundColor: 'rgba(16,185,129,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 16,
  },
  matchText: {
    color: Colors.success,
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  company: {
    fontSize: 16,
    color: Colors.textLight,
  },
  infoCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  infoCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundCard,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  infoText: {
    marginTop: 8,
    fontSize: 12,
    color: Colors.textDark,
    textAlign: 'center',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    color: Colors.textDark,
    lineHeight: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  listIcon: {
    marginTop: 2,
    marginRight: 8,
  },
  listText: {
    fontSize: 15,
    color: Colors.textDark,
    flex: 1,
  },
  footer: {
    padding: 24,
    paddingBottom: 32,
    backgroundColor: Colors.backgroundCard,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  applyButton: {
    backgroundColor: Colors.orange,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: Colors.orange,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
