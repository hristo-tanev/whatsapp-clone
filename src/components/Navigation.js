import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'

export default class Navigation extends React.Component {
  render() {
    return (
      <View>
        <NavigationBar
          style={styles.nav}
          title={{
            title: 'WhatsApp',
            style: {
              color: '#ffffff',
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    height: 80,
    backgroundColor: '#075E54'
  }
})
