import React from "react"
import { Text,
    SafeAreaView,
    Image, TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native"
import colors from "../styles/colors"
import { Feather} from "@expo/vector-icons"

import wateringImg from "../assets/watering.png"

export function Welcome(){
 
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>
      
      <Image 
        source= {wateringImg} 
        style= {styles.image}
        resizeMode="contain"
      />
     
      <Text style = {styles.subtitle}>
        Não esqueça mais de regar suas plantas. {'\n'}
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity 
        activeOpacity = {0.7}
        style = {styles.button}        
      >
        <Feather 
          name="chevron-right"
          style= {styles.buttonIcon}
        />
      </TouchableOpacity>    
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    textAlign: "center",
    marginTop: 38,
  },
  subtitle: {
    color: colors.heading,
    fontSize: 18,
    paddingHorizontal: 20, 
    textAlign: "center"
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
    marginBottom: 10
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32
  }
})