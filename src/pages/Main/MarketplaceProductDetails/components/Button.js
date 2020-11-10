import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { colors } from '~/commons'

const Button = ({ icon, text, command }) => {

    return <TouchableOpacity
        style={styles.container}
        onPress={command}
    >
        <View style={styles.icon}>
            {icon}
        </View>

        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.orange,
        padding: 10,
        width: '90%',
        borderRadius: 10,
        marginVertical: 5,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        color: colors.orange,
        fontSize: 20
    },
    icon: {
        flex: 0.5
    }
})

export default Button