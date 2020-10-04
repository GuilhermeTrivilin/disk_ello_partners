import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from '../../../components/Header'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'

export default function Home({ navigation, route }) {
    return <View style={styles.container}>
        <Header
            route={route}
            navigation={navigation}
            title='Meus serviços'
        />

        <View style={styles.content}>
            <ServiceCard />
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