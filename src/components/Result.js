import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'

export default function Result(props) {
  console.log(props.data);

  return (
    <View>
      {props.data.showResults
        ?
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
            <Divider style={{ backgroundColor: '#1A535C' }} />
            <ListItem
              title={"Total Tax Owing"}
              subtitle={`$ ${props.data.totalTaxBill}`}
            />
            <ListItem
              title={"Total Tax Owing Bi-Weekly"}
              subtitle={`$ ${Math.round(props.data.totalTaxBill / 26 * 100) / 100}`}
            />
        </View> :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
})
