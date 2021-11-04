/* https://reactnavigation.org/docs/params documentacion de como crear varias pantallas*/
/* https://www.youtube.com/watch?v=gvHUQNm9qq8 como aplicar fuentes
   https://reactnavigation.org/docs/headers cabezal
   https://reactnative.dev/docs/flexbox flexbox
*/
import * as React from 'react';
import MainStack from './Navigation/MainStack';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import Loader from './components/Loader';

function App() {
  return ( 
    <>
      <View style={styles.container}>
      <MainStack/>
      </View>
    </>  
  );
}

export default App;

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: "#CCFBFE",
  },

});