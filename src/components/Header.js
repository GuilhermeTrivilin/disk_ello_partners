import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import NewServiceModal from '~/components/modals/NewService'

import { colors, shadow } from '~/commons'

const Header = ({
    navigation,
    route,
    title
}) => {

    const [modalAddService, setModalAddService] = useState(false)

    Entypo.loadFont()
    AntDesign.loadFont()

    const renderIcon = route.name === 'Home' ?
        <AntDesign
            name='pluscircle'
            size={22}
            color={colors.orange}
            onPress={() => setModalAddService(true)}
        />
        :
        <AntDesign
            name='home'
            size={22}
            onPress={() => navigation.navigate('Home')}
        />

    return <View style={[styles.container, shadow]}>
        <Entypo
            name='menu'
            size={25}
            onPress={() => navigation.toggleDrawer()}
        />

        <Text style={styles.title}>{title}</Text>

        {renderIcon}

        <NewServiceModal
            visible={modalAddService}
            closeModal={() => setModalAddService(false)}
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