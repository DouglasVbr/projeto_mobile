import {StyleSheet} from 'react-native';

//o StyleSheet é a folha de estilo, equivalente ao css
const styles = StyleSheet.create({
  tela: {
    flex: 1,
    // backgroundColor: '#00FFFF'
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
  texto_botao: {
    fontSize: 20,
    color: 'white',
  },
  titulo_campos: {
    fontSize: 20,
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

  largura_70: {
    width: '70%',
  },

  imagem_200: {
    width: 200,
    height: 200,
  },

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

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  toggleButtonSim: {
    padding: 10,
    backgroundColor: '#4CAF50', // verde
    borderRadius: 5,
    alignItems: 'center',
    flex: 0.45,
  },
  toggleButtonNao: {
    padding: 10,
    backgroundColor: '#f44336', // vermelho
    borderRadius: 5,
    alignItems: 'center',
    flex: 0.45,
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export {styles};
