import * as React from 'react';
import { View, Text, Dimensions, StyleSheet} from 'react-native';

const { width, height} = Dimensions.get("screen");

/*lo que se va a ver en la pantalla register*/
function Register({ navigation }) {
    return (
      <View style={styles.container}>
  
      <Text style={styles.loginletra}>Registro</Text>
  
  
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

    loginletra: {
      fontSize: 60,
      color: "#1D3557",
      fontFamily: "LoveYaLikeASister_400Regular",
      textAlign: 'center',
      padding: 120,
    },

  });

  export default Register;