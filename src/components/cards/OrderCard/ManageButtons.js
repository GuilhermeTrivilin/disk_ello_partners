import React from 'react'
import { View, StyleSheet } from 'react-native'

import RoundedButton from '~/components/buttons/Rounded'
import { colors } from '~/commons'

const ManageButtons = ({
    handleAcceptOrder,
    handleRejectOrder
}) => <View style={styles.buttonsWrapper}>
        <RoundedButton
            text="Aceitar"
            styleContainer={{ width: "30%" }}
            command={handleAcceptOrder}
        />
        <RoundedButton
            text="Recusar"
            backgroundColor={colors.red}
            styleContainer={{ width: "30%" }}
            command={handleRejectOrder}
        />
    </View>

const styles = StyleSheet.create({
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default ManageButtons