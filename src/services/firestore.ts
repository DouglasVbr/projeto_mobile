import firestore from '@react-native-firebase/firestore';

export const cadastrarCliente = async (cliente: {
  nome: string;
  email: string;
  celular: string;
  comorbidade: string;
}) => {
  try {
    const response = await firestore().collection('cliente').add({
      nome: cliente.nome,
      email: cliente.email,
      celular: cliente.celular,
      comorbidade: cliente.comorbidade,
    });
    return {success: true, id: response.id};
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    return {success: false, error};
  }
};

const novoCliente = {
  nome: 'Douglas Vieira',
  email: 'douglascanal1998@gmail.com',
  celular: '51998509992',
  comorbidade: 'Não',
};

const resultado = await cadastrarCliente(novoCliente);
if (resultado.success) {
  console.log('Cliente salvo com ID:', resultado.id);
}
