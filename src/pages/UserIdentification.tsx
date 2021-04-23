import React from "react"

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView, 
  KeyboardAvoidingView,
  Platform
} from "react-native"

import { Button } from "../components/Button"

import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function UserIdentification (){
  return (
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView
        style = {styles.container}
        behavior = {Platform.OS === "ios" ? "padding" : "height" }
      >
        <View style = {styles.content}>
          <View style = {styles.form}>  
            <View style ={styles.header}>
              <Text style = {styles.emoji}>
                  😄
              </Text>

              <Text style = {styles.title}>
                Como podemos 
                {"\n"}chamar você?
              </Text>
            </View>       
            <TextInput 
              style= {styles.input}
              placeholder = "Digite um nome"
            >
            </TextInput>
            <View style = {styles.footer}>
              <Button/>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container : {
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: "100%"
  },
  form: {
    flex:1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center"
  },
  header: {
    alignItems:"center"
  },
  emoji: {
    fontSize: 44,
  }, 
  title: {
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.heading,
    color: colors.heading, 
    marginTop: 21,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontFamily: fonts.text,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  footer: {
    marginTop: 40, 
    width: "100%",
    paddingHorizontal: 10
  }
})