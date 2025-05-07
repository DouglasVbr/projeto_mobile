import React, { useState } from 'react';
import { View, Text, TextInput, Image, Switch, Pressable } from 'react-native';

import { styles } from '../styles/styles'

const TelaCadastroPaciente: React.FC = () => {
  const [comorbidade, setComorbidade] = useState(false);

  const toggleComorbidade = () => {
    setComorbidade((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/cliente.png')} style={styles.image} />
      <Text style={styles.title}>Cadastro de Paciente</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Digite o nome" />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Possui comorbidade</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>{comorbidade ? 'Sim' : 'Não'}</Text>
          <Switch
            value={comorbidade}
            onValueChange={toggleComorbidade}
            thumbColor={comorbidade ? '#4CAF50' : '#f44336'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        <Pressable style={styles.buttonCancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TelaCadastroPaciente;
