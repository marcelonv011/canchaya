import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pantallas/HomeScreen';
import Ingreso from '../pantallas/Ingreso';
import Register from '../pantallas/Register';
import Recovery from '../pantallas/Recovery';

const Stack = createNativeStackNavigator()

const MainStack = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen}
          options={{
          title: '',

          }}
           />
  
          <Stack.Screen 
          name='Ingreso' 
          component={Ingreso} 
          options= {{ 
          title:  'User',
          }}
          />
  
          <Stack.Screen 
          name='Register' 
          component={Register} 
          options={{ title: 'Creando usuario' }}  
          />
  
          <Stack.Screen 
          name='Recovery' 
          component={Recovery} 
          options={{ title: 'recuperando contraseña' }}  
          />
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  

  export default MainStack;