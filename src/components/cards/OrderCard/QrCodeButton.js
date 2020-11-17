import React, { useState } from 'react'

import { StyleSheet } from 'react-native'

import RoundedButton from '~/components/buttons/Rounded'
import QrCodeModal from './QrCodeModal'

const QrCodeButton = ({ 
    status,
    qrCode
 }) => {

    const [qrCodeModal, setQrCodeModal] = useState(false)

    const renderActionText = status === 'accepted' 
        ? "Iniciar serviço"
        : "Finalizar serviço"

    return <>
        <RoundedButton
            text={renderActionText}
            styleContainer={styles.button}
            command={() => setQrCodeModal(true)}
        />

        <QrCodeModal 
            visible={qrCodeModal}
            closeModal={() => setQrCodeModal(false)}
            title={renderActionText}
            qrCode={qrCode}
        />
    </>
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        alignSelf: 'center'
    }
})

export default QrCodeButton