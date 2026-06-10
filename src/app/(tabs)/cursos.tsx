import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { BookOpen, Star, Lock, CheckCircle, Award, Target, FileSignature, Briefcase, Users } from 'lucide-react-native';

const { width } = Dimensions.get('window');

// Dados da trilha de aprendizado
const learningNodes = [
  { id: '1', title: 'Boas-vindas', type: 'lesson', status: 'completed', icon: BookOpen },
  { id: '2', title: 'Comunicação', type: 'lesson', status: 'completed', icon: BookOpen },
  { id: '3', title: 'Desafio 1', type: 'checkpoint', status: 'completed', icon: Award },
  { id: '4', title: 'Lógica', type: 'lesson', status: 'active', icon: Target },
  { id: '5', title: 'Matemática Básica', type: 'lesson', status: 'locked', icon: BookOpen },
  { id: '6', title: 'Trabalho em Equipe', type: 'lesson', status: 'locked', icon: BookOpen },
  { id: '7', title: 'Desafio 2', type: 'checkpoint', status: 'locked', icon: Award },
  { id: '8', title: 'Currículo', type: 'reward', status: 'locked', icon: Star },
];

// Dados da trilha de acompanhamento
const mentoringNodes = [
  { id: '1m', title: 'Entrevista Inicial', type: 'lesson', status: 'completed', icon: Users },
  { id: '2m', title: 'Assinatura', type: 'checkpoint', status: 'completed', icon: FileSignature },
  { id: '3m', title: 'Visita Mês 1', type: 'lesson', status: 'active', icon: Target },
  { id: '4m', title: 'Visita Mês 3', type: 'lesson', status: 'locked', icon: Users },
  { id: '5m', title: 'Visita Mês 6', type: 'lesson', status: 'locked', icon: Users },
  { id: '6m', title: 'Avaliação Final', type: 'reward', status: 'locked', icon: Star },
];

export default function CursosScreen() {
  const [activeTab, setActiveTab] = useState<'aprendizado' | 'acompanhamento'>('aprendizado');
  
  const currentNodes = activeTab === 'aprendizado' ? learningNodes : mentoringNodes;
  
  const renderNode = (node: any, index: number) => {
    // Calcula o desvio horizontal para fazer o zigue-zague
    const offset = Math.sin(index * 0.8) * (width * 0.25);
    
    // Define as cores e ícones baseados no status e tipo
    let bgColor = Colors.borderLight;
    let iconColor = Colors.textLight;
    let IconComponent = node.icon || BookOpen;

    if (node.status === 'completed') {
      bgColor = Colors.orange; // Cor de completado
      iconColor = '#fff';
      IconComponent = CheckCircle;
    } else if (node.status === 'active') {
      bgColor = Colors.primary; // Cor principal para o ativo
      iconColor = '#fff';
      IconComponent = Target;
    }

    return (
      <View key={node.id} style={[styles.nodeContainer, { transform: [{ translateX: offset }] }]}>
        
        {/* Tooltip apenas para a lição ativa */}
        {node.status === 'active' && (
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>COMEÇAR</Text>
            <View style={styles.tooltipTriangle} />
          </View>
        )}

        {/* Círculo do Nó */}
        <TouchableOpacity 
          style={[
            styles.nodeCircle, 
            { backgroundColor: bgColor },
            node.status === 'active' && styles.activeNodeShadow,
            node.type === 'checkpoint' && styles.checkpointNode
          ]}
          activeOpacity={0.8}
        >
          <IconComponent size={node.type === 'checkpoint' ? 32 : 28} color={iconColor} />
        </TouchableOpacity>
        
        {/* Título abaixo do nó */}
        <Text style={[
          styles.nodeTitle, 
          node.status === 'locked' && { color: Colors.textLight }
        ]}>
          {node.title}
        </Text>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minhas Trilhas</Text>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'aprendizado' && styles.tabButtonActive]}
            onPress={() => setActiveTab('aprendizado')}
          >
            <Text style={[styles.tabText, activeTab === 'aprendizado' && styles.tabTextActive]}>Cursos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'acompanhamento' && styles.tabButtonActive]}
            onPress={() => setActiveTab('acompanhamento')}
          >
            <Text style={[styles.tabText, activeTab === 'acompanhamento' && styles.tabTextActive]}>Acompanhamento</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView 
        contentContainerStyle={styles.pathContent}
        showsVerticalScrollIndicator={false}
      >
        {currentNodes.map((node, index) => renderNode(node, index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B', // Fundo escuro como o Duolingo para destacar as cores
  },
  header: {
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.backgroundCard,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
    padding: 4,
    width: '100%',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  tabButtonActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    color: Colors.textLight,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.primary,
  },
  pathContent: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  nodeContainer: {
    alignItems: 'center',
    marginVertical: 16,
    width: 140, // Largura fixa para manter o texto centralizado abaixo do nó
  },
  nodeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  checkpointNode: {
    width: 90,
    height: 90,
    borderRadius: 16, // Checkpoint quadrado arredondado
  },
  activeNodeShadow: {
    shadowColor: Colors.orange,
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 12,
  },
  nodeTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  tooltip: {
    backgroundColor: Colors.orange,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  tooltipText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tooltipTriangle: {
    position: 'absolute',
    bottom: -6,
    alignSelf: 'center',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.orange,
  },
});
