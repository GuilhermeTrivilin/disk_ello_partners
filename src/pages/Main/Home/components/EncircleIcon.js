import React from 'react'
import { View, StyleSheet } from 'react-native'

const EncircleIcon = ({ children, color }) => <View
    style={[styles.encircleIcon, { backgroundColor: color }]}
>
    {children}
</View>

const styles = StyleSheet.create({
    encircleIcon: {
        borderRadius: 30,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EncircleIcon