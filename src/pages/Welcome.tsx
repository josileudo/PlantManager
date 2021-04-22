import React, {useState} from "react"
import {Text, SafeAreaView, Image, TouchableOpacity, StyleSheet} from "react-native"
import colors from "../styles/colors"

import wateringImg from "../assets/watering.png"
import { Button } from "../components/Button"

export function Welcome(){
  
  const [visible, setVisible] = useState()

  function handleVisibility(){
  }

  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>
      {
        visible &&
        <Image source= {wateringImg} style= {styles.image}/>
      }
      <Text style = {styles.subtitle}>
        Não esqueça mais de regar suas plantas. {'\n'}
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title = " > " />    
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
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
  button: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 56,
    width: 56,
    marginBottom: 10
  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})