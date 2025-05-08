import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import {styles} from '../styles/styles';

const TelaCadastroPaciente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [comorbidade, setComorbidade] = useState<'sim' | 'nao' | null>(null);

  const handleCadastrar = () => {
    Alert.alert(
      'Dados do Cadastro',
      `Nome: "${nome}"\nE-mail: "${email}"\nTelefone: "${telefone}"\nPossui comorbidade: ${
        comorbidade === 'sim' ? 'Sim' : 'Não'
      }`,
    );
  };

  const handleCancelar = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setComorbidade(null);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/cliente.png')} style={styles.image} />
      <Text style={styles.title}>Cadastro de Exercício</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          placeholderTextColor="gray"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          keyboardType="email-address"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          keyboardType="phone-pad"
          placeholderTextColor="gray"
          value={telefone}
          onChangeText={setTelefone}
        />

        <Text style={styles.label}>Possui comorbidade</Text>
        <Pressable
          style={[
            styles.switchContainer,
            comorbidade === 'sim'
              ? styles.switchSelected
              : styles.switchDefault,
          ]}
          onPress={() => setComorbidade(comorbidade === 'sim' ? 'nao' : 'sim')}>
          <View
            style={[
              styles.switchToggle,
              comorbidade === 'sim'
                ? styles.switchToggleOn
                : styles.switchToggleOff,
            ]}
          />
          <Text style={styles.switchText}>
            {comorbidade === 'sim' ? 'Sim' : 'Não'}
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({pressed}) => [
            styles.button,
            {
              transform: [{scale: pressed ? 0.95 : 1}],
              backgroundColor: pressed ? 'lightgray' : 'transparent',
            },
          ]}
          onPress={handleCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.button,
            {
              transform: [{scale: pressed ? 0.95 : 1}],
              backgroundColor: pressed ? 'lightgray' : 'transparent',
            },
          ]}
          onPress={handleCancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TelaCadastroPaciente;
