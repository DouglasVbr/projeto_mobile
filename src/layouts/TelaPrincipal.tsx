import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
const TelaPrincipal = (_props: PrincipalProps) => {
  return (
    <View style={[styles.container]}>
      <Exemplo07_Image />
      {/* <Exemplo1/> */}
    </View>
  );
};

export default TelaPrincipal;
