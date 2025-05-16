import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Cursive',
    color: '#fff',
    textShadowColor: 'goldenrod',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    padding: 10,
    textAlign: 'auto',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 16,
  },
  comorbidadeContainer: {
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#4a90e2',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 0.45,
  },
  toggleButtonDefault: {
    backgroundColor: '#ddd',
  },
  toggleButtonSelectedSim: {
    backgroundColor: 'goldenrod',
  },
  toggleButtonSelectedNao: {
    backgroundColor: 'gray',
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'goldenrod',
    backgroundColor: 'transparent',
  },
  buttonCadastrar: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 5,
    width: '48%',
  },
  buttonCancelar: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    padding: 5,
  },
  switchSelected: {
    backgroundColor: '#4caf50',
  },
  switchDefault: {
    backgroundColor: '#ccc',
  },
  switchToggle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  switchToggleOn: {
    backgroundColor: '#4caf50',
    alignSelf: 'flex-end',
  },
  switchToggleOff: {
    backgroundColor: '#ccc',
    alignSelf: 'flex-start',
  },
  switchText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 8,
  },
});

export {styles};
