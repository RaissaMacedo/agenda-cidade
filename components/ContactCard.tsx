import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';

type Props = {
  name: string;
  phone: string;
};

export function ContactCard({ name, phone }: Props) {
  const copyToClipboard = () => {
    Clipboard.setStringAsync(phone);
    Alert.alert('Número copiado', phone);
  };

  const callNumber = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={copyToClipboard} style={styles.button}>
          <Text>Copiar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={callNumber} style={styles.button}>
          <Text>Ligar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  phone: {
    fontSize: 16,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 4,
  },
});