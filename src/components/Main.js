import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Header } from 'react-native-elements'
import Form from './Form'

export default function Main() {
  return (
    <View style={styles.container}>
      <Header
        // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Tax Buddy', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor={"#FF6B6B"}
      />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    marginTop: 50
    // justifyContent: 'center',
  },
})
