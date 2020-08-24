import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import SwitchButton from '~/components/buttons/Switch'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Divider from '~/components/Divider'
import ServiceInfoModal from '~/components/modals/ServiceInfoModal'

import { shadow } from '~/commons'
import EncircleIcon from './EncircleIcon'

const ServiceCard = () => {

    EvilIcons.loadFont()
    AntDesign.loadFont()
    MaterialIcons.loadFont()

    const [attendingService, setAttendingService] = useState(false)
    const [infoModal, setInfoModal] = useState(false)

    return <View style={[styles.container, shadow]}>
        <View style={styles.imageWrapper}>
            <Image
                source={require("~/assets/services_images/massage.png")}
            />
        </View>

        <View style={styles.informationsView}>
            <View>
                <Text style={styles.title}>Massagem</Text>
                <Divider />
            </View>

            <Text style={styles.text}>Você teve um total de 0 atendimentos neste serviço.</Text>

            <View style={styles.buttonsRow}>
                <EncircleIcon color="red">
                    <EvilIcons
                        name='trash'
                        size={20}
                        color='#FFF'
                    />
                </EncircleIcon>

                <AntDesign
                    name='infocirlce'
                    size={22}
                    color='#198de6'
                    onPress={() => setInfoModal(true)}
                />

                <EncircleIcon color="darkgreen">
                    <MaterialIcons
                        name="attach-money"
                        size={20}
                        color="#FFF"
                    />
                </EncircleIcon>

                <SwitchButton
                    isActive={attendingService}
                    onChange={setAttendingService}
                />
            </View>
        </View>

        <ServiceInfoModal
            visible={infoModal}
            closeModal={() => setInfoModal(false)}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 20,
        borderRadius: 10,
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        textAlign: 'center'
    },
    imageWrapper: {
        flex: 1,
        overflow: "hidden",
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        borderRightWidth: 1,
        borderRightColor: 'gray'
    },
    informationsView: {
        flex: 1.5,
        justifyContent: 'space-around'
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})

export default ServiceCard