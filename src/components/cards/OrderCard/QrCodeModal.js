import React from 'react'
import { StyleSheet, Text, Image, Dimensions } from 'react-native'

import RoundedButton from '~/components/buttons/Rounded'
import LayoutModal from '~/components/modals/LayoutModal'

const QrCodeModal = ({
    visible,
    closeModal,
    title,
    qrCode: { url }
}) => {

    return <LayoutModal
        visible={visible}
        closeModal={closeModal}
        title={title}
    >

        <Text style={styles.subtitle}>Mostre o QRCode abaixo para o cliente escanear.</Text>

        <Image source={{uri: url || ""}} style={styles.qrCode} />

        <RoundedButton
            backgroundColor="gray"
            text="Fechar"
            styleContainer={styles.closeButton}
            command={closeModal}
        />
    </LayoutModal>
}

const styles = StyleSheet.create({
    subtitle: {
        textAlign: 'center'
    },
    qrCode: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        alignSelf: 'center'
    },
    closeButton: {
        width: '50%', 
        alignSelf: 'center' 
    }
})

export default QrCodeModal