import React from 'react'
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native'

import DrawerButtons from './DrawerButtons'
import DrawerHeader from './DrawerHeader'

const path = {
    logo: require('~/assets/background.png')
}

export default function DrawerContent(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={path.logo}
        >
            <View {...props} >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <DrawerHeader />
                    <DrawerButtons {...props} />
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
})