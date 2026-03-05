import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>ReservaFácil</Text>

      <Image
        source={{ uri: 'https://es.pngtree.com/freepng/restaurant-vector-icon_4114187.html' }}
        style={styles.image}
      />

      <Text style={styles.description}>
        Encuentra restaurantes cercanos y reserva tu mesa en segundos.
      </Text>

      <Button
        title="Reservar Mesa"
        onPress={() => alert('Ir a reservas')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 20
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30
  }
});