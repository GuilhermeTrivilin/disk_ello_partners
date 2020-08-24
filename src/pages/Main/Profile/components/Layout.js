import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Divider from '~/components/Divider'
import { shadow } from '~/commons'

const Layout = ({ children, title }) => {

    return <View style={[styles.container, shadow]}>
        <Text style={styles.title}>{title}</Text>

        <Divider />

        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10
    }
})

export default Layout