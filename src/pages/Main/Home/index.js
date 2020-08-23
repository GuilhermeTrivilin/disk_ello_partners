import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from './components/Header'
import Footer from './components/Footer'

export default function Home({ navigation }) {

    return <View style={styles.container}>
        <Header openDrawer={() => navigation.toggleDrawer()} />

        <View style={styles.content}>

        </View>

        <Footer />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1
    }
})