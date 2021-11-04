/* https://stackoverflow.com/questions/29337444/how-do-you-style-a-textinput-in-react-native-for-password-input como poner en **** text input password*/

import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import image from "../assets/padel.png"
import Loader from '../components/Loader';
import LoaderLogin from '../components/LoaderLogin';



/*lo que se va a ver en la pantalla ingreso*/
function Ingreso({ navigation }) {
  
    return (
      <View style={styles.container}>
        <LoaderLogin/>
        <Image
         source={image} 
         style={styles.pelota}
      />
        <Text style={styles.loginletra}>LOGIN</Text>
          
          <Text style={styles.emailletra}> correo electronico </Text>
            
            <TextInput style={styles.entradatexto} />
            
          <Text style={styles.emailletra}> contraseña </Text> 
            
            <TextInput style={styles.entradatexto} secureTextEntry={true}/>
           
            <TouchableOpacity 
              onPress = { () => navigation.navigate('Ingreso')}
              style={styles.botonmenu}
            >
            <Text style={styles.textomenu}> Ingresar </Text>
            
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
    
    pelota: {
      height: 155,
      width: 150,
      margin: 20,
    },

    loginletra: {
      fontSize: 70,
      color: "#1D3557",
      fontFamily: "LoveYaLikeASister_400Regular",
      height: 90,
    },

    entradatexto: {
      borderColor: "white",
      borderWidth: 3,
      backgroundColor: "#1D3557",
      color: "#fff", 
      padding: 15,
      width: 300
    },

    emailletra: {
      fontSize: 25,
      color: "#1D3557",
      margin: 5,
    },
  
    botonmenu: {
      backgroundColor: "#1D3557",
      padding: 9,
      marginTop: 25,
      height: 40,
      width: 105,
    },
  
    textomenu: {
      color: "#fff",
      fontSize: 20,
      textAlign: 'center', /*texto alineado*/
    },

  });

  export default Ingreso;