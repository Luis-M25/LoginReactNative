import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ImageBackground } from 'react-native';  
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';

export default function App() {
  const [mostrarContraseña, setMostrarContraseña] = React.useState(false);
  
  return (
    
    <View style={styles.container}>
      // Creación del fondo de pantalla con la imagen de fondo.png
      <ImageBackground source={require('./assets/fondo.png')} 
      style={{ width: 360, height: 900, position: 'absolute', right: 0, top: 0 }} 
      />
      <Image source={require('./assets/AlertaUrbanaLogo.png')} style={styles.logo} />
      <Text style={styles.title}
      >Bienvenido</Text>

      // Creación de los campos de texto para el correo electrónico y la contraseña, con sus respectivos íconos
      <View style={styles.inputContainer}>
        <Entypo name="mail" size={22} color="#6f6f6f" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor={"#9b9b9b"}
        />
      </View>

      // Creación de los botones para recuperar el correo electrónico y la contraseña, con estilos de texto subrayado y colores específicos
      <TouchableOpacity>
        <Text style={{ color: '#000000', textDecorationLine: 'underline', marginBottom: 20, top: -15, left: 55 }}>¿Olvidaste tu correo?</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Entypo name="lock" size={22} color="#6f6f6f" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor={"#9b9b9b"}
          secureTextEntry={!mostrarContraseña}
        />
        <TouchableOpacity onPress={() => setMostrarContraseña(!mostrarContraseña)}>
          <Entypo 
          name={mostrarContraseña ? "eye" : "eye-with-line"}
          size={20} 
          color="#6f6f6f" 
          style={{ position: 'absolute',top: -36 ,right: 14, zIndex: 1 }} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={{ color: '#000000', textDecorationLine: 'underline', marginBottom: 20, top: -15, left: 41 }}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={{ color: '#000000', marginBottom: 20,right: 38, top: 20 }}>¿No tienes una cuenta?</Text>
      <TouchableOpacity>
        <Text style={{ color: '#03023e', textDecorationLine: 'underline', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1, marginBottom: 20, top: -21, right: -67 }}>Regístrate</Text>
      </TouchableOpacity> 
      </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72a3ebfa',
    alignItems: 'center',
    padding: 50,
  },
    logo: {
    width: 150,
    height: 150,
    marginBottom: 80,
    borderRadius: 75,
    top: 40,
  },
  title: {
    fontSize: 30,
    color: '#f8f8f8',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 14,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#DDE3EA',
    color: '#575757',
    padding: 15,
    paddingLeft: 46,
    borderRadius: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#43A047',
    padding: 15,
    borderRadius: 50,
    borderBottomColor: '#388E3C',
    borderBottomWidth: 3,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    top: 30,
  },
  buttonText:{
    color:'#fff',
    fontSize: 18,
  },
});




