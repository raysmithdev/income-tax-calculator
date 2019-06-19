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
    uscLevels: [
      { level: 12012, rate: 0.5},
      { level: 7862, rate: 2},
      { level: 50170, rate: 4.5},
      { level: 50171, rate: 8}
    ],
    prsi: 4,
    taxCredit: 3300
  }

  const [lowIncomeTax, setLowIncomeTax] = useState(0)
  const [highIncomeTax, setHighIncomeTax] = useState(0)
  const [prsi, setPrsi] = useState(0)
  const [totalTaxBill, setTotalTaxBill] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [salary, setSalary] = useState('')
  const [uscTax, setUscTax] = useState([])
  const [totalUscTaxOwed, setTotalUscTaxOwed] = useState(0)

  //// TODO: Refactor handleSubmit function. Bit messy at the moment.
  const handleSubmit = input => {
    let salary = input.nativeEvent.text

    // Income Tax
    let salaryToBeTaxedAtHighIncomeRate = salary - rates.lowIncomeTax.cutOff
    let lowIncomeTax = rates.lowIncomeTax.cutOff * rates.lowIncomeTax.rate / 100
    let highIncomeTax = salaryToBeTaxedAtHighIncomeRate * rates.highIncomeTax.rate / 100

    setLowIncomeTax(lowIncomeTax)
    setHighIncomeTax(highIncomeTax)

    // PRSI
    let prsi = salary * rates.prsi / 100
    setPrsi(prsi)

    // USC

    let counter = 0
    let uscTax = []
    let totalUscOwing = 0

    // loop over levels of usc
    rates.uscLevels.forEach(item => {

      salary = salary - item.level

      if(salary < 0) {
        counter = counter + 1
      }

      if(counter <= 1) {
        let tax = item.level * item.rate / 100
        totalUscOwing += tax

        return uscTax.push({rate: item.rate, level: item.level, tax})
      }
    })

    setUscTax(uscTax)
    setTotalUscTaxOwed(Math.round(totalUscOwing * 100) / 100)
    // setTotalTaxBillOwing
    setTotalTaxBill(lowIncomeTax + highIncomeTax + prsi + Math.round(totalUscOwing * 100) / 100)

    setShowResults(true)
  }

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
      <Result data={{lowIncomeTax, highIncomeTax, prsi, uscTax, totalUscTaxOwed, totalTaxBill, showResults}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
})
