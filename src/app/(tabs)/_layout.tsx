import React from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Home, Briefcase, BookOpen, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textLight,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: Colors.borderLight,
          elevation: 0,
          shadowOpacity: 0,
          minHeight: 60,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: Colors.backgroundCard,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: Colors.borderLight,
        },
        headerTitleStyle: {
          color: Colors.primary,
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="vagas"
        options={{
          title: 'Vagas',
          tabBarIcon: ({ color }) => <Briefcase size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cursos"
        options={{
          title: 'Cursos',
          tabBarIcon: ({ color }) => <BookOpen size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
