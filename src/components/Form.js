import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'
import Result from './Result'

export default function Form() {

  const rates = {
    lowIncomeTax: {
      rate: 20,
      cutOff: 35300
    },
    highIncomeTax: {
      rate: 40,
      cutOff: 35301
    },
    usc: [
      { level: 12012, rate: 0.5},
      { level: 7862, rate: 2},
      { level: 50170, rate: 4.5},
      { level: 50171, rate: 8}
    ],
    prsi: 4,
    taxCredit: 1650
  }

  const [lowIncomeTax, setLowIncomeTax] = useState(0)
  const [highIncomeTax, setHighIncomeTax] = useState(0)
  const [prsi, setPrsi] = useState(0)
  const [totalTaxBill, setTotalTaxBill] = useState(0)
  const [showResults, setShowResults] = useState(false)


  const handleSubmit = input => {
    const salary = input.nativeEvent.text

    // Income Tax
    let salaryToBeTaxedAtHighIncomeRate = salary - rates.lowIncomeTax.cutOff
    let lowIncomeTax = salary * rates.lowIncomeTax.rate / 100
    let highIncomeTax = salaryToBeTaxedAtHighIncomeRate * rates.highIncomeTax.rate / 100

    setLowIncomeTax(lowIncomeTax)
    setHighIncomeTax(highIncomeTax)

    // USC


    // PRSI
    let prsi = salary * rates.prsi / 100
    setPrsi(prsi)

    // setTotalTaxBill
    setTotalTaxBill(lowIncomeTax + highIncomeTax + prsi)

    setShowResults(true)
  }

  const [salary, setSalary] = useState('')
  return (
    <View style={styles.container}>
      <Input
        onSubmitEditing={handleSubmit}
        placeholder='Enter your yearly income'
        leftIcon={
          <Icon
            name='euro'
            size={24}
            color='black'
          />
        }
      />
      <Result data={{lowIncomeTax, highIncomeTax, prsi, totalTaxBill, showResults}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
})
