import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Bell, Trophy, CalendarDays } from 'lucide-react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configurando o calendário para Português
LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

export default function DashboardScreen() {
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Pegando a data de hoje no formato YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);

  // Mock de eventos por data
  const eventsByDate: Record<string, any> = {
    '2026-06-13': { hasEvent: true, eventTitle: 'Palestra de Iniciação', eventTime: 'Ontem, 09:00 - Online' },
    '2026-06-15': { hasEvent: true, eventTitle: 'Reunião de Acompanhamento', eventTime: 'Amanhã, 14:00 - CRAS Centro' },
  };

  // Mock de notificações
  const mockNotifications = [
    { id: '1', title: 'Mensagem do Técnico', text: 'Ana, não esqueça de trazer sua declaração escolar na próxima reunião.', time: 'Há 2h', isRead: false },
    { id: '2', title: 'Nova Vaga Disponível', text: 'Temos uma nova vaga de Jovem Aprendiz Administrativo que dá match com seu perfil!', time: 'Ontem', isRead: true },
  ];
  
  // Calcula quantas não lidas existem
  const unreadCount = mockNotifications.filter(n => !n.isRead).length;

  const selectedEvent = eventsByDate[selectedDate] || { hasEvent: false, eventTitle: 'Sem eventos marcados', eventTime: '' };

  // Construindo os "markedDates" para o Calendário
  const markedDates: Record<string, any> = {};
  
  // Marcar dias com eventos
  Object.keys(eventsByDate).forEach(date => {
    if (eventsByDate[date].hasEvent) {
      markedDates[date] = { marked: true, dotColor: Colors.orange };
    }
  });

  // Marcar o dia selecionado (sobrescreve se já tiver evento, mas mantém o ponto)
  if (markedDates[selectedDate]) {
    markedDates[selectedDate] = { ...markedDates[selectedDate], selected: true, selectedColor: Colors.primary };
  } else {
    markedDates[selectedDate] = { selected: true, selectedColor: Colors.primary };
  }

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar with Discrete Gamification and Notifications */}
      <View style={styles.topBar}>
        <View style={styles.pointsPill}>
          <Trophy color={Colors.orange} size={16} />
          <Text style={styles.pointsText}>1.250 Coins</Text>
        </View>

        <TouchableOpacity onPress={() => setShowNotifications(!showNotifications)} style={styles.bellButton}>
          <Bell color={Colors.textDark} size={24} />
          {unreadCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>{unreadCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Ana!</Text>
        <Text style={styles.subtitle}>Bem-vinda ao seu painel do Programa Descubra.</Text>
      </View>

      {/* Notifications Dropdown (Simulado) */}
      {showNotifications && (
        <View style={styles.notificationsDropdown}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>Notificações</Text>
            {unreadCount > 0 && <Text style={styles.dropdownCount}>{unreadCount} novas</Text>}
          </View>
          
          {mockNotifications.map(notif => (
            <View key={notif.id} style={[styles.notificationItem, !notif.isRead && styles.notificationUnread]}>
              <View style={styles.notificationDotContainer}>
                {!notif.isRead && <View style={styles.notificationDot} />}
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationItemTitle}>{notif.title}</Text>
                <Text style={styles.notificationItemText}>{notif.text}</Text>
                <Text style={styles.notificationTime}>{notif.time}</Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Visual Calendar */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <CalendarDays color={Colors.primary} size={20} />
          <Text style={styles.cardTitle}>Nesta Semana</Text>
        </View>
        
        <Calendar
          onDayPress={(day: any) => setSelectedDate(day.dateString)}
          markedDates={markedDates}
          theme={{
            todayTextColor: Colors.primary,
            arrowColor: Colors.primary,
            selectedDayBackgroundColor: Colors.primary,
            dotColor: Colors.orange,
            textDayFontWeight: '500',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '600',
          }}
          style={styles.calendarComponent}
        />
        
        <View style={styles.eventDetail}>
          <View style={[styles.eventTimeLine, !selectedEvent?.hasEvent && { backgroundColor: Colors.borderLight }]} />
          <View>
            <Text style={styles.eventTitle}>{selectedEvent?.eventTitle}</Text>
            {selectedEvent?.eventTime ? (
              <Text style={styles.eventTime}>{selectedEvent.eventTime}</Text>
            ) : null}
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  pointsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
  pointsText: {
    marginLeft: 6,
    color: Colors.orange,
    fontWeight: 'bold',
    fontSize: 14,
  },
  bellButton: {
    padding: 4,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 16,
    height: 16,
    backgroundColor: Colors.error,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    zIndex: 10,
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  notificationsDropdown: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: Colors.orange,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    paddingBottom: 8,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  dropdownCount: {
    fontSize: 12,
    color: Colors.orange,
    fontWeight: 'bold',
  },
  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  notificationUnread: {
    backgroundColor: 'rgba(249, 115, 22, 0.05)',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: -8,
  },
  notificationDotContainer: {
    width: 16,
    alignItems: 'center',
    paddingTop: 6,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.orange,
  },
  notificationContent: {
    flex: 1,
  },
  notificationItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 4,
  },
  notificationItemText: {
    fontSize: 13,
    color: Colors.textLight,
    lineHeight: 18,
  },
  notificationTime: {
    fontSize: 11,
    color: Colors.primary,
    marginTop: 6,
    fontWeight: '600',
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textLight,
    marginTop: 4,
  },
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginLeft: 8,
  },
  cardText: {
    fontSize: 14,
    color: Colors.textLight,
  },
  calendarComponent: {
    marginBottom: 20,
    borderRadius: 8,
  },
  eventDetail: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundLight,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  eventTimeLine: {
    width: 4,
    height: 36,
    backgroundColor: Colors.orange,
    borderRadius: 2,
    marginRight: 12,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  eventTime: {
    fontSize: 13,
    color: Colors.textLight,
    marginTop: 2,
  },
});
