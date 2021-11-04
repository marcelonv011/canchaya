import * as React from 'react';
import { useFonts as usePatraya, Pattaya_400Regular } from '@expo-google-fonts/pattaya';
import { useFonts as useLoveyalike, LoveYaLikeASister_400Regular } from '@expo-google-fonts/love-ya-like-a-sister';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import image from "../assets/futpe.png";
import Loader from '../components/Loader';



/*lo que se va a ver en la pantalla principal*/
function HomeScreen({ navigation }) {
  
  let [PatrayaLoaded] = usePatraya({                 /* esto va para cambiar la fuente una de google*/
    Pattaya_400Regular,
  });
  
  let [LoveyalikeLoaded] = useLoveyalike({
    LoveYaLikeASister_400Regular,
  });
  
  if(!PatrayaLoaded || !LoveyalikeLoaded){  /* caso que no encuentre la fuente retorna null*/
    return null;
  }

  return (
    <View style={styles.container}>
    <Loader/>
      <Image
      source={image} 
      style={styles.pelota}
      />
      <Text style={styles.canchaya}>CANCHAYA!</Text>
     
      <TouchableOpacity 
      onPress = { () => navigation.navigate('Ingreso')}
      style={styles.botonmenu1}
      >
      <Text style={styles.textomenu}> Ingresar </Text>
      </TouchableOpacity>
     
      <TouchableOpacity 
      onPress={() => navigation.navigate('Register')}
      style={styles.botonmenu2}
      >
      <Text style={styles.textomenu}> Registrarse </Text>
      </TouchableOpacity>

      
      <Text 
      style={styles.olvidopassword}
      onPress={() => navigation.navigate('Recovery')}
      > 
      Olvido su contraseña?
      </Text>
      
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
    margin: 20
  },
  
  canchaya: {
    fontSize: 80,
    fontFamily: 'Pattaya_400Regular',
    color: "#1D3557",
  },

  botonmenu1: {
    backgroundColor: "#1D3557",
    padding: 9,
    marginTop: 10,
    height: 40,
    width: 105,
  },
  botonmenu2: {
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

  olvidopassword: {
    fontSize: 25,
    padding: 40,
    color: "#1D3557",
  },

});

export default HomeScreen;