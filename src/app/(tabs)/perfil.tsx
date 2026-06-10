import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Settings, FileText, LogOut, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function PerfilScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>AN</Text>
        </View>
        <Text style={styles.name}>Ana Nogueira</Text>
        <Text style={styles.email}>ana@jovem.com</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Jovem Aprendiz</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meu Currículo</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/curriculo')}>
          <FileText size={20} color={Colors.textLight} />
          <Text style={styles.menuItemText}>Visualizar / Editar Currículo</Text>
          <ChevronRight size={20} color={Colors.borderLight} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/configuracoes')}>
          <Settings size={20} color={Colors.textLight} />
          <Text style={styles.menuItemText}>Dados Pessoais</Text>
          <ChevronRight size={20} color={Colors.borderLight} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color={Colors.error} />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: Colors.backgroundCard,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 12,
  },
  badge: {
    backgroundColor: 'rgba(13,92,58,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.textLight,
    textTransform: 'uppercase',
    marginBottom: 8,
    marginLeft: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundCard,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: Colors.textDark,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'rgba(239,68,68,0.1)',
    borderRadius: 12,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.error,
  },
});
