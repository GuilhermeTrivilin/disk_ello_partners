import React from 'react'

import DefaultModal from './DefaultModal'
import Divider from '../Divider'

import { View, StyleSheet, Text } from 'react-native'
import { colors } from '~/commons'

const LayoutModal = ({ visible, closeModal, title, children }) => {

    return <DefaultModal
        visible={visible}
        closeModal={closeModal}
        styleContainer={styles.container}
    >
        <View>
            <Text style={styles.title}>{title}</Text>
            <Divider />
        </View>

        {children}
    </DefaultModal>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        borderTopWidth: 7,
        borderTopColor: colors.green,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default LayoutModal