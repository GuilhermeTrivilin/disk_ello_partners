import React from 'react'
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native'

import { colors } from '~/commons'

const Loading = ({ visible }) => {
    return (
        <Modal
            animationType='fade'
            visible={visible}
            transparent
        >
            <View style={styles.background}>
                <View style={styles.content}>
                    <ActivityIndicator size="large" color={colors.green} />
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    content: {
        backgroundColor: 'white',
        padding: 20,
        borderTopWidth: 5,
        borderTopColor: colors.green,
        zIndex: 999,
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
    },
})

export default Loading