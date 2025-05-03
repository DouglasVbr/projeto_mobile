import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from '../styles/styles';
import {useState} from 'react';

type StateProps = {
  onClick: (text: string) => void;
};

const ExemploState = (props: StateProps) => {
  const [frase, setFrase] = useState('bom dia');

  return (
    <View style={styles.tela}>
      <Text style={styles.tituloTela}>Frase</Text>
      <TextInput
        style={styles.centralizar}
        onChangeText={text => {
          console.log(text);
          setFrase(text);
        }}
        value={frase}
      />
      <Pressable
        style={({pressed}) => [styles.botao, pressed && styles.click]}
        onPress={() => props.onClick(frase)}>
        <Text style={styles.texto_botao}>Entrar</Text>
      </Pressable>
    </View>
  );
};

export default ExemploState;
