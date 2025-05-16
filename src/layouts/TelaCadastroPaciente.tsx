import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/styles';
import {salvarCliente} from '../services/firebaseConfig';

const TelaCadastroPaciente: React.FC = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [comorbidade, setComorbidade] = useState<'sim' | 'nao'>('nao');

  const handleCancelar = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setComorbidade('nao');
  };

  const handleCadastrar = async () => {
    if (!nome || !email || !telefone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const resultado = await salvarCliente({
      nome,
      email,
      celular: telefone,
      comorbidade: comorbidade === 'sim' ? 'Sim' : 'Não',
    });

    if (resultado.sucesso) {
      Alert.alert('Sucesso', 'Cliente cadastrado com sucesso!');
      handleCancelar();
      navigation.goBack();
    } else {
      Alert.alert(
        'Erro',
        'Não foi possível cadastrar o cliente. Tente novamente.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro de Paciente</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <View style={styles.comorbidadeContainer}>
          <Text style={styles.label}>Possui comorbidade?</Text>
          <View style={styles.radioGroup}>
            <Pressable
              style={[
                styles.radioButton,
                comorbidade === 'sim' && styles.radioButtonSelected,
              ]}
              onPress={() => setComorbidade('sim')}>
              <Text>Sim</Text>
            </Pressable>
            <Pressable
              style={[
                styles.radioButton,
                comorbidade === 'nao' && styles.radioButtonSelected,
              ]}
              onPress={() => setComorbidade('nao')}>
              <Text>Não</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonCancelar} onPress={handleCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </Pressable>
          <Pressable style={styles.buttonCadastrar} onPress={handleCadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TelaCadastroPaciente;
