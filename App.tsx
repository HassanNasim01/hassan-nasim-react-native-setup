import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to React Native!</Text>
        <Text style={styles.subtitle}>Mobile Application Development</Text>
        <Text style={styles.name}>Hassan Nasim</Text>
        <Text style={styles.badge}>Status: Setup Successful</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: '85%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 12,
  },
  badge: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4ade80',
  },
});