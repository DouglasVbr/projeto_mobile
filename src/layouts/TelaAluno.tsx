import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from '../styles/styles';
import CalculadoraMedias from '../components/CalculadoraMedias';

// Definindo o tipo para as rotas disponíveis
type RootStackParamList = {
  TelaPrincipal: undefined;
  CadastroPaciente: undefined;
  TelaAluno: undefined;
  TelaExercicio: undefined;
};

// Tipando a navegação
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const TelaAluno = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <CalculadoraMedias />

      <View style={estilosMenu.menuContainer}>
        <Text style={estilosMenu.menuTitle}>Menu de Navegação</Text>
        <Pressable
          style={estilosMenu.menuButton}
          onPress={() => navigation.navigate('TelaExercicio')}>
          <Text style={estilosMenu.menuButtonText}>Ir para Exercício</Text>
        </Pressable>
        <Pressable
          style={estilosMenu.menuButton}
          onPress={() => navigation.navigate('TelaPrincipal')}>
          <Text style={estilosMenu.menuButtonText}>Ir para Tela Principal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const estilosMenu = StyleSheet.create({
  menuContainer: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuButton: {
    width: '100%',
    backgroundColor: 'goldenrod',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  menuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TelaAluno;
