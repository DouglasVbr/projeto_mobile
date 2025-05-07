import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  
  tela: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },

  
  tituloTela: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
  },
  titulo1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  titulo2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  titulo_campos: {
    fontSize: 20,
    color: 'black',
  },

  // Formulários
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: 'black',
  },
  caixa_texto: {
    color: 'black',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 4,
    margin: 3,
    backgroundColor: 'white',
  },

  // Imagem
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  imagem_200: {
    width: 200,
    height: 200,
  },

  // Botões
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
  },
  botao_vermelho: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonCadastrar: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonCancelar: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  texto_botao: {
    fontSize: 20,
    color: 'white',
  },

  // Container de botões
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },

  // Botões toggle
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  toggleButtonSim: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    flex: 0.45,
  },
  toggleButtonNao: {
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 5,
    alignItems: 'center',
    flex: 0.45,
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  toggleLabel: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },

  // Outros
  card: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  click: {
    opacity: 0.5,
  },
  centralizar: {
    alignItems: 'center',
  },
  largura_70: {
    width: '70%',
  },
});

export { styles };
