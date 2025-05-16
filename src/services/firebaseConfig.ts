import firestore from '@react-native-firebase/firestore';

const clienteCollection = firestore().collection('cliente');

interface Cliente {
  nome: string;
  email: string;
  celular: string;
  comorbidade: string;
}

export const salvarCliente = async (cliente: Cliente) => {
  try {
    const response = await clienteCollection.add({
      ...cliente,
      dataCadastro: firestore.FieldValue.serverTimestamp(),
    });
    return {sucesso: true, id: response.id};
  } catch (erro) {
    console.error('Erro ao salvar cliente:', erro);
    return {sucesso: false, erro};
  }
};

export const buscarClientes = async () => {
  try {
    const snapshot = await clienteCollection.get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (erro) {
    console.error('Erro ao buscar clientes:', erro);
    return [];
  }
};

export const deletarCliente = async (id: string) => {
  try {
    await clienteCollection.doc(id).delete();
    return {sucesso: true};
  } catch (erro) {
    console.error('Erro ao deletar cliente:', erro);
    return {sucesso: false, erro};
  }
};
