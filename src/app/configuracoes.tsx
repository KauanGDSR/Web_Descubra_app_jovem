import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { ChevronLeft, Save } from 'lucide-react-native';

export default function ConfiguracoesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft size={28} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados Pessoais</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput 
              style={styles.input}
              value="Ana Silva"
              editable={false}
            />
            <Text style={styles.hint}>Para alterar seu nome, procure o CRAS.</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail para Contato</Text>
            <TextInput 
              style={styles.input}
              defaultValue="ana.silva@jovem.com"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone / WhatsApp</Text>
            <TextInput 
              style={styles.input}
              defaultValue="(31) 98765-4321"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nova Senha de Acesso</Text>
            <TextInput 
              style={styles.input}
              placeholder="Digite apenas se quiser alterar"
              secureTextEntry
            />
          </View>
        </View>

      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 32) }]}>
        <TouchableOpacity style={styles.saveButton} onPress={() => {
          alert('Configurações atualizadas!');
          router.back();
        }}>
          <Save size={20} color="#fff" style={{marginRight: 8}} />
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
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
  },
  section: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 12,
    fontSize: 16,
    color: Colors.textDark,
    backgroundColor: '#fff',
  },
  hint: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 4,
  },
  footer: {
    padding: 24,
    paddingBottom: 32,
    backgroundColor: Colors.backgroundCard,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
