import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'

export default function Result(props) {
  console.log(props);

  return (
    <View style={styles.container}>
        <ListItem
          title={"Income Tax @ 20%"}
          subtitle={`$ ${props.data.lowIncomeTax}`}
        />
        <ListItem
          title={"Income Tax @ 40%"}
          subtitle={`$ ${props.data.highIncomeTax}`}
        />
        <ListItem
          title={"Prsi @ 4%"}
          subtitle={`$ ${props.data.prsi}`}
        />
        <Divider style={{ backgroundColor: 'blue' }} />
        <ListItem
          title={"Total Tax Owing"}
          subtitle={`$ ${props.data.totalTaxBill}`}
        />
        <ListItem
          title={"Total Tax Owing Bi-Weekly"}
          subtitle={`$ ${props.data.totalTaxBill / 26}`}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
})
