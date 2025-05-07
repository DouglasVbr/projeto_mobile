import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    borderColor: 'goldenrod',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
  buttonText: {
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
