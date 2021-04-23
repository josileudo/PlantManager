import React from "react"
import { Text,
    SafeAreaView,
    Image, TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from "react-native"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

import { Feather} from "@expo/vector-icons"

import wateringImg from "../assets/watering.png"

export function Welcome(){
 
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.wrapper}>
      
        <Text style = {styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        
        <Image 
          source= {wateringImg} 
          style= {styles.image}
          resizeMode="contain"
        />
      
        <Text style = {styles.subtitle}>
          Não esqueça mais de regar suas plantas. 
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  wrapper:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    lineHeight: 38,
    fontWeight: "bold",
    color: colors.heading,
    textAlign: "center",
    marginTop: 38,
    fontFamily: fonts.heading
  },
  subtitle: {
    color: colors.heading,
    fontSize: 18,
    paddingHorizontal: 20, 
    textAlign: "center",
    lineHeight: 26,
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