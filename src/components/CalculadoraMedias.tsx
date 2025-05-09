import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

const CalculadoraMedias = () => {
  const [nome, setNome] = useState('');
  const [nota1Texto, setNota1Texto] = useState('');
  const [nota2Texto, setNota2Texto] = useState('');
  const [media, setMedia] = useState(0);
  const [aprovado, setAprovado] = useState(false);

  // Converte o texto para número e verifica se é válido
  const converterNota = (texto: string): number => {
    const numeroConvertido = parseFloat(texto);
    return isNotaValida(numeroConvertido) ? numeroConvertido : 0;
  };

  // Atualiza a média sempre que as notas mudarem
  useEffect(() => {
    const nota1Numerica = converterNota(nota1Texto);
    const nota2Numerica = converterNota(nota2Texto);

    const novaMedia = (nota1Numerica + nota2Numerica) / 2;
    setMedia(novaMedia);
    setAprovado(novaMedia >= 7.0);
  }, [nota1Texto, nota2Texto]);

  return (
    <ScrollView>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Calculadora de Médias</Text>

        <View style={[estilos.card, {borderColor: aprovado ? 'green' : 'red'}]}>
          <Text style={estilos.label}>Nome do Aluno:</Text>
          <TextInput
            style={estilos.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome do aluno"
          />

          <Text style={estilos.label}>Nota 1:</Text>
          <TextInput
            style={estilos.input}
            value={nota1Texto}
            onChangeText={setNota1Texto}
            placeholder="Digite a primeira nota"
            keyboardType="numeric"
            maxLength={4}
          />

          <Text style={estilos.label}>Nota 2:</Text>
          <TextInput
            style={estilos.input}
            value={nota2Texto}
            onChangeText={setNota2Texto}
            placeholder="Digite a segunda nota"
            keyboardType="numeric"
            maxLength={4}
          />

          <View style={estilos.resultadoContainer}>
            <Text style={estilos.textoDestaque}>Média: {media.toFixed(1)}</Text>
            <Text
              style={[estilos.resultado, {color: aprovado ? 'green' : 'red'}]}>
              {aprovado ? 'Aprovado' : 'Reprovado'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Função para validar se a nota está entre 0 e 10
const isNotaValida = (nota: number): boolean => {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
};

// Estilos para o componente
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  resultadoContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
  },
  textoDestaque: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultado: {
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 18,
  },
});

export default CalculadoraMedias;
