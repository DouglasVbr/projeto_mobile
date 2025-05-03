import React from 'react';
import {View} from 'react-native';
import {PrincipalProps} from '../navigation/HomeNavigator';
import {styles} from '../styles/styles';
import Exemplo07_Image from '../components/Exemplo07_Image';

// Componente chamado TelaPrincipal que recebe
// PrincipalProps
// como parametro e constrói uma View com o componente
// HelloWorld e Exemplo1 dentro
const TelaPrincipal = (_props: PrincipalProps) => {
  return (
    <View style={[styles.tela]}>
      <Exemplo07_Image />
      {/* <Exemplo1/> */}
    </View>
  );
};

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
