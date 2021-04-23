import React from "react"
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native"

import colors from "../styles/colors"
import fonts from "../styles/fonts"


export function Button(){ 
  return (
    <TouchableOpacity 
      style = {styles.container}
      
    >
      <Text style = {styles.text}>
        Confirmar
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent:"center",
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 27
  }
})