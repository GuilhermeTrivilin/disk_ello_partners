import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const DrawerHeader = () => {

    return <View style={styles.container}>
        <View style={{
            backgroundColor: '#FFF',
            width: 170,
            height: 170,
            borderRadius: 170 / 2,
            borderWidth: 1,
            borderColor: 'gray',
            alignSelf: 'center',
            marginTop: 15
        }} />

        <Text style={styles.text}>Cláudio Disk Ello</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {

    },
    text: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default DrawerHeader