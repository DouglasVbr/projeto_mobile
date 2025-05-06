import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import {styles} from '../styles/styles';

const TelaCadastroPaciente: React.FC = () => {
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
          <TouchableOpacity style={styles.toggleButtonSim}>
            <Text style={styles.toggleButtonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButtonNao}>
            <Text style={styles.toggleButtonText}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaCadastroPaciente;
