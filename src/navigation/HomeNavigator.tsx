import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TelaPrincipal from '../layouts/TelaPrincipal';
import TextInputList from '../components/TextInputList';
import CalculadoraMedias from '../components/CalculadoraMedias';
import TelaExercicio from '../layouts/TelaExercicio';

type RootStackParamList = {
  TelaPrincipal: undefined;
  TextInputList: undefined;
  CalculadoraMedias: undefined;
  TelaExercicio: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="TextInputList" component={TextInputList} />
      <Stack.Screen name="CalculadoraMedias" component={CalculadoraMedias} />
      <Stack.Screen name="TelaExercicio" component={TelaExercicio} />
    </Stack.Navigator>
  );
};

export type {RootStackParamList};
export default HomeNavigator;
