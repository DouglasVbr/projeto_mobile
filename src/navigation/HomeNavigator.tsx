import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TelaPrincipal from '../layouts/TelaPrincipal';
import TelaAluno from '../layouts/TelaAluno';
import TelaCadastroPaciente from '../layouts/TelaCadastroPaciente';
import TelaExercicio from '../layouts/TelaExercicio';
import TelaListaClientes from '../layouts/TelaListaClientes';

type RootStackParamList = {
  TelaPrincipal: undefined;
  CadastroPaciente: undefined;
  TelaAluno: undefined;
  TelaExercicio: undefined;
  ListaClientes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaAluno"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="CadastroPaciente" component={TelaCadastroPaciente} />
      <Stack.Screen name="TelaAluno" component={TelaAluno} />
      <Stack.Screen name="TelaExercicio" component={TelaExercicio} />
      <Stack.Screen name="ListaClientes" component={TelaListaClientes} />
    </Stack.Navigator>
  );
};

export type {RootStackParamList};
export default HomeNavigator;
