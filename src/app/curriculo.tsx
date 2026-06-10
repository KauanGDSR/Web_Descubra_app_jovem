import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { ChevronLeft, Save, PlusCircle, GraduationCap, Briefcase, Upload, FileBadge } from 'lucide-react-native';

export default function CurriculoScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft size={28} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meu Currículo</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Resumo Profissional</Text>
          </View>
          <View style={styles.card}>
            <TextInput 
              style={styles.textArea}
              multiline
              numberOfLines={4}
              placeholder="Fale um pouco sobre você, seus objetivos e habilidades..."
              placeholderTextColor={Colors.textLight}
              defaultValue="Sou um jovem em busca da primeira oportunidade profissional, com muita vontade de aprender e me desenvolver. Tenho facilidade com tecnologia e trabalho em equipe."
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Escolaridade</Text>
            <TouchableOpacity>
              <PlusCircle size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.itemRow}>
              <View style={styles.iconBox}>
                <GraduationCap size={20} color={Colors.primary} />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Ensino Médio</Text>
                <Text style={styles.itemSubtitle}>Escola Estadual Mário Quintana</Text>
                <Text style={styles.itemDate}>Cursando (2º Ano) • Noturno</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Cursos e Habilidades</Text>
            <TouchableOpacity>
              <PlusCircle size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.itemRow}>
              <View style={styles.iconBox}>
                <Briefcase size={20} color={Colors.primary} />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Informática Básica</Text>
                <Text style={styles.itemSubtitle}>Instituição Parceira</Text>
                <Text style={styles.itemDate}>Concluído em Dez/2023</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Meus Certificados</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.itemRow}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(16,185,129,0.1)' }]}>
                <FileBadge size={20} color={Colors.success} />
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>Certificado_Informatica.pdf</Text>
                <Text style={styles.itemSubtitle}>Enviado há 2 dias</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.uploadButton}>
              <Upload size={16} color={Colors.primary} style={{marginRight: 8}} />
              <Text style={styles.uploadButtonText}>Anexar Novo Certificado</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 32) }]}>
        <TouchableOpacity style={styles.saveButton} onPress={() => {
          alert('Currículo atualizado com sucesso!');
          router.back();
        }}>
          <Save size={20} color="#fff" style={{marginRight: 8}} />
          <Text style={styles.saveButtonText}>Salvar Currículo</Text>
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
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: 15,
    color: Colors.textDark,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'rgba(30,58,138,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  itemSubtitle: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 2,
  },
  itemDate: {
    fontSize: 12,
    color: Colors.orange,
    marginTop: 4,
    fontWeight: '600',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  uploadButtonText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 14,
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
