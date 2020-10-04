import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { baseURL } from '~/commons'

import { useGlobalState } from '~/states/ContextProvider'

const DrawerHeader = () => {

    const { user } = useGlobalState()
    const userImage = user.avatar ? { uri: `${baseURL}${user.avatar.url}` } : null

    return <View style={styles.container}>
        <Image
            style={styles.image}
            source={userImage}
        />

        <Text style={styles.text}>{user.name}</Text>
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
    },
    image: {
        backgroundColor: '#FFF',
        width: 170,
        height: 170,
        borderRadius: 170 / 2,
        borderWidth: 1,
        borderColor: 'gray',
        alignSelf: 'center',
        marginTop: 15
    }
})

export default DrawerHeader