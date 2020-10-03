import React from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'

const path = {
    background: require('~/assets/background.png'),
    logo: require('~/assets/logo-02.png')
}

const Background = ({ children, hasLogo = false, logoPosition }) => {

    const renderLogo = hasLogo && <Image 
        source={path.logo}
        style={[styles.logo, {...logoPosition}]}
    />

    return (
        <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.container}
        >
            {children}
            {renderLogo}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        position: 'absolute',
    }
})

export default Background