import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const { width, height} = Dimensions.get("screen");

function Recovery({ navigation }) {
    return (
      <View style={styles.container}>
  
      <Text>necesito recuperar mi contraseña</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.popToTop()}
        style={styles.botonmenu}
        >
        <Text style={styles.textomenu}> volver a la primera pantalla </Text>
        </TouchableOpacity>
  
      </View>
    );
  }


  const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: "#CCFBFE",
    },

    botonmenu: {
      backgroundColor: "#1D3557",
      padding: 9,
      marginTop: 10,
      height: 40,
      width: 105,
    },
    
    textomenu: {
      color: "#fff",
      fontSize: 20,
      textAlign: 'center', /*texto alineado*/
    },

  });

  export default Recovery;