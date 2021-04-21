import React from "react"
import {TouchableOpacity, StyleSheet, Text} from "react-native"
import colors from "../styles/colors"


interface ButtonProps {
  title: string
}

export function Button ({ title } : ButtonProps){
  return(
    <TouchableOpacity 
      activeOpacity = {0.7}
      style = {styles.button}
    >
    <Text style = {styles.buttonText}>
      {title}
    </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

  button: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 56,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})