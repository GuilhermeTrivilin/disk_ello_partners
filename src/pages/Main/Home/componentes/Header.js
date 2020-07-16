import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { colors, shadow } from '~/commons'

const Header = () => {

    Entypo.loadFont()
    AntDesign.loadFont()

    return <View style={[styles.container, shadow]}>
        <Entypo name='menu' size={25} />

        <Text style={styles.title}>Meus Serviços</Text>

        <AntDesign
            name='pluscircle'
            size={22}
            color={colors.orange}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    }
})

export default Header