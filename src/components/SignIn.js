import React from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi there!</Text>
        <Button
          title="Next"
          color="#841584"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
