import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { User, LogIn } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [jovemId, setJovemId] = useState('');

  const handleLogin = () => {
    // Simulando login
    if (jovemId.trim().length > 0) {
      router.replace('/(tabs)');
    }
  };

  const handleQuickLogin = () => {
    setJovemId('123456');
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.logoTitle}>Descubra<Text style={styles.logoHighlight}>!</Text></Text>
          <Text style={styles.subtitle}>Portal do Jovem</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Acesse sua conta</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>ID do Jovem</Text>
            <View style={styles.inputWrapper}>
              <User color={Colors.textLight} size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Ex: 123456"
                value={jovemId}
                onChangeText={setJovemId}
                keyboardType="numeric"
                placeholderTextColor={Colors.textLight}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Acessar Portal</Text>
            <LogIn color="#fff" size={20} style={{marginLeft: 8}} />
          </TouchableOpacity>

          <View style={styles.quickAccessContainer}>
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Acesso Rápido</Text>
              <View style={styles.dividerLine} />
            </View>
            
            <TouchableOpacity style={styles.quickLoginButton} onPress={handleQuickLogin}>
              <Text style={styles.quickLoginText}>Entrar como Jovem (Exemplo)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  logoTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  logoHighlight: {
    color: Colors.orange,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondary,
    fontWeight: '600',
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 16,
    padding: 24,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  inputIcon: {
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: Colors.textDark,
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: Colors.orange,
    height: 54,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.orange,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickAccessContainer: {
    marginTop: 32,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.borderLight,
  },
  dividerText: {
    marginHorizontal: 12,
    color: Colors.textLight,
    fontSize: 12,
    fontWeight: '600',
  },
  quickLoginButton: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickLoginText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
