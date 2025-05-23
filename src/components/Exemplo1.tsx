import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {styles} from '../styles/styles';

const Exemplo1 = () => {
  //variável
  const url = 'https://reactnative.dev/docs/assets/p_cat2.png';

  //O retorno da função é o que será construído em tela
  return (
    /*Painel que desliza*/
    <ScrollView>
      {/*texto ou label */}
      <Text style={stylesLocal.titulo1}>Exemplo 1 com style</Text>
      {/* painel */}
      <View>
        <Text>Text comum sem estilização</Text>

        {/*imagem, o campo source é o caminho da imagem */}
        <View style={stylesLocal.centralizar}>
          <Image source={{uri: url}} style={{width: 200, height: 200}} />
        </View>
      </View>

      {/*caixa de texto */}
      <TextInput
        style={[styles.input, {width: '70%'}]}
        defaultValue="Digite aqui"
      />

      {/*isso é um botão */}
      <Pressable style={{backgroundColor: 'green', alignItems: 'center'}}>
        <Text style={styles.title}>Isso é um Botão</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Exemplo1;

const stylesLocal = StyleSheet.create({
  centralizar: {
    alignItems: 'center',
  },
  titulo1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});
