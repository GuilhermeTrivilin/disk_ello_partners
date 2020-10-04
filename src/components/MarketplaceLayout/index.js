import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from './Header'
import Footer from './Footer'

const MarketplaceLayout = ({ navigation, children, title, hasGoBack = true }) => {
    return (
        <View style={styles.container}>
            <Header 
                navigation={navigation}
                title={title}
                hasGoBack={hasGoBack}
            />

            <View style={styles.content}>
                {children}
            </View>

            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    content: {
        flex: 1
    }
})

export default MarketplaceLayout