import React from 'react';
import {Text} from 'react-native';
import {styles} from '../styles/styles';

type NomeProps = {
  nome: string;
  sobrenome: string;
};

const NomePersonalizado = (props: NomeProps) => {
  return <Text style={styles.title}>{props.nome + ' ' + props.sobrenome}</Text>;
};

const Batatinha = () => {
  return <NomePersonalizado nome={'Igor'} sobrenome={'Bandasz'} />;
};

export default NomePersonalizado;
export {Batatinha};
