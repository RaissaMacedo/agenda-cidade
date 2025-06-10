import React from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import contacts from '../data/contacts.json';
import { ContactCard } from '../components/ContactCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agenda da Cidade</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.phone}
        renderItem={({ item }) => (
          <ContactCard name={item.name} phone={item.phone} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});