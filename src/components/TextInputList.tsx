import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TextInputList = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [selectedPhrase, setSelectedPhrase] = useState('');

  const handleAddItem = () => {
    if (text.trim()) {
      setItems([...items, text.trim()]);
      setText(''); // Limpa o campo de texto
    }
  };

  const handlePhraseSelect = (phrase: string) => {
    setSelectedPhrase(phrase);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Digite algo..."
        />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handlePhraseSelect(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {selectedPhrase ? (
        <View style={styles.selectedPhraseContainer}>
          <Text style={styles.selectedPhraseTitle}>Frase selecionada:</Text>
          <Text style={styles.selectedPhraseText}>{selectedPhrase}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedPhraseContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 16,
    borderRadius: 4,
  },
  selectedPhraseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectedPhraseText: {
    fontSize: 14,
    color: '#333',
  },
  header: {
    width: '100%',
    paddingVertical: 10,
  },
  backButton: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
    width: 80,
  },
  backButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TextInputList;
