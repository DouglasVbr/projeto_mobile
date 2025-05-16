import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {buscarClientes, deletarCliente} from '../services/firebaseConfig';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  celular: string;
  comorbidade: string;
}

const TelaListaClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const navigation = useNavigation();

  const carregarClientes = async () => {
    const dados = await buscarClientes();
    const clientesFormatados = dados.map((cliente: any) => ({
      id: cliente.id,
      nome: cliente.nome || '',
      email: cliente.email || '',
      celular: cliente.celular || '',
      comorbidade: cliente.comorbidade || '',
    }));
    setClientes(clientesFormatados);
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  const handleDeletar = (cliente: Cliente) => {
    Alert.alert(
      'Confirmar exclusão',
      `Deseja excluir o cliente ${cliente.nome}?`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Confirmar',
          onPress: async () => {
            const resultado = await deletarCliente(cliente.id);
            if (resultado.sucesso) {
              Alert.alert('Sucesso', 'Cliente removido com sucesso!');
              carregarClientes();
            } else {
              Alert.alert('Erro', 'Erro ao remover cliente');
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Clientes</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={clientes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.clienteCard}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>Email: {item.email}</Text>
            <Text style={styles.info}>Celular: {item.celular}</Text>
            <Text style={styles.info}>Comorbidade: {item.comorbidade}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletar(item)}>
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
    backgroundColor: '#2d6ca9',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
  },
  clienteCard: {
    margin: 10,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  deleteButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#ff4444',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default TelaListaClientes;
