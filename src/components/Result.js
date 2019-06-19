import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'

export default function Result(props) {
  return (
    <View>
      {props.data.showResults
        ?
        <View style={styles.container}>
            <ListItem
              title={"Income Tax @ 20%"}
              subtitle={`€ ${props.data.lowIncomeTax}`}
            />
            <ListItem
              title={"Income Tax @ 40%"}
              subtitle={`€ ${props.data.highIncomeTax}`}
            />
            <ListItem
              title={"Prsi @ 4%"}
              subtitle={`€ ${props.data.prsi}`}
            />
            <ListItem
              title={"USC"}
              subtitle={`€ ${props.data.totalUscTaxOwed}`}
            />
            <Divider style={{ backgroundColor: '#1A535C' }} />
            <ListItem
              title={"Gross Tax"}
              subtitle={`€ ${props.data.totalTaxBill}`}
            />
            <ListItem
              title={"Tax Credit"}
              subtitle={"€3300"}
            />
            <Divider style={{ backgroundColor: '#1A535C' }} />
            <ListItem
              title={"Total Tax"}
              subtitle={`€ ${Math.round((props.data.totalTaxBill - 3300) * 100) / 100}`}
            />
            <ListItem
              title={"Total Tax Owing Bi-Weekly"}
              subtitle={`€ ${Math.round((props.data.totalTaxBill - 3300) / 26 * 100) / 100}`}
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
