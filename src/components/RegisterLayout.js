import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'

import Background from './Background'

const RegisterLayout = ({ children }) => {

    const renderContent = <Background
        logoPosition={{ right: 0, bottom: 0 }}
        hasLogo
    >
        <View style={styles.container}>

            {children}

        </View>
    </Background>

    return <FlatList 
        ListHeaderComponent={renderContent}
        showsVerticalScrollIndicator={false}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height
    }
})

export default RegisterLayout