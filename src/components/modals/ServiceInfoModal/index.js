import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import RoundedButton from '~/components/buttons/Rounded'
import LayoutModal from '~/components/modals/LayoutModal'
import RenderStars from '~/components/RenderStars'
import Divider from '~/components/Divider'
import Card from './Card'

const ServiceInfoModal = ({ visible, closeModal }) => {

    return <LayoutModal
        visible={visible}
        closeModal={closeModal}
        title="Informações deste serviço"
    >

        <View style={styles.avaliationWrapper}>
            <Text style={styles.avaliationText}>Sua avaliação neste serviço é</Text>
            <RenderStars stars_length={3} size={20} />

            <Divider />
        </View>

        <Card
            periodLabel="Hoje"
            attendances={2}
            value={50}
        />

        <Card
            periodLabel="7 dias"
            attendances={2}
            value={50}
        />

        <Card
            periodLabel="30 dias"
            attendances={2}
            value={50}
        />

        <RoundedButton
            text="FECHAR"
            backgroundColor="gray"
            command={closeModal}
        />
    </LayoutModal>
}

const styles = StyleSheet.create({
    avaliationText: {
        fontSize: 18,
        marginVertical: 10
    },
    avaliationWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ServiceInfoModal