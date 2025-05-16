import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/HomeNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const TelaPrincipal = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('TextInputList' as never)}>
          <Text style={styles.buttonText}>Lista de Textos</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('CalculadoraMedias' as never)}>
          <Text style={styles.buttonText}>Calculadora de Médias</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('TelaExercicio')}>
          <Text style={styles.buttonText}>Exercícios</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaPrincipal;
