import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import AvaliationWrapper from '../AvaliationWrapper'
import RoundedButton from '~/components/buttons/Rounded'
import ClientAvaliationModal from '~/components/modals/ClientAvaliation'
import CardTable from './CardTable'

import { shadow, colors } from '~/commons'
import CancelServiceModal from '~/components/modals/CancelServiceModal'

const FinalizedOrderCard = ({ status, ...props }) => {

    const path = {
        logo: require("~/assets/logo-02.png")
    }

    const [clientAvaliationModal, setClientAvaliationModal] = useState(false)
    const [cancelServiceModal, setCancelServiceModal] = useState(false)

    const renderAvaliation = status === "finished" && <AvaliationWrapper />
    
    const renderProgressCircle = status === 'in_progress' && <View style={styles.progressCircle} />
    const renderFinishButton = status === "in_progress" && <>
        <RoundedButton
            text="FINALIZAR"
            styleContainer={styles.button}
            command={() => setClientAvaliationModal(true)}
        />

        <RoundedButton
            text="CANCELAR"
            styleContainer={styles.button}
            backgroundColor={colors.red}
            command={() => setCancelServiceModal(true)}
        />
    </>

    return <View style={[styles.container, shadow]}>

        <CardTable
            status={status}
            {...props}
        />

        {renderAvaliation}
        {renderFinishButton}
        {renderProgressCircle}

        <Image
            source={path.logo}
            style={styles.logo}
        />

        <ClientAvaliationModal
            visible={clientAvaliationModal}
            closeModal={() => setClientAvaliationModal(false)}
        />

        <CancelServiceModal 
            visible={cancelServiceModal}
            closeModal={() => setCancelServiceModal(false)}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignSelf: 'center',
        width: '95%',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10
    },
    logo: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    progressCircle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: colors.green,
        position: 'absolute',
        top: -5,
        right: -5
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        marginVertical: 5
    }
})

export default FinalizedOrderCard