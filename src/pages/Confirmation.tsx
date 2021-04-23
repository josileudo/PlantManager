import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native"
import { Button } from "../components/Button"
import colors from "../styles/colors"
import fonts from "../styles/fonts"


export function Confirmation (){
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.content}>
        <Text style = {styles.emoji}>
        😄
        </Text>

        <Text style = {styles.title}>
          Prontinho
        </Text>
        <Text style= {styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'}
          planinhas com muito cuidado.
        </Text>

        <View style = {styles.footer}>
          <Button/>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20
  },
  emoji: {
    fontSize: 96,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 30,
    marginTop: 75,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,    
    textAlign: "center",
    paddingVertical: 10
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20
  }
})