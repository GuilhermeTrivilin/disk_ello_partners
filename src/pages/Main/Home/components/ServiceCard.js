import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import SwitchButton from '~/components/buttons/Switch'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Divider from '~/components/Divider'
import ServiceInfoModal from '~/components/modals/ServiceInfoModal'
import ChangePriceModal from '~/components/modals/ChangePriceModal'
import EncircleIcon from './EncircleIcon'

import { shadow } from '~/commons'
import { destroyUserService, updateUserService } from '~/services/services'
import { showToast } from '~/helpers/showToast'

const ServiceCard = ({ service, removeFromServices }) => {

    const {
        id,
        status,
        sub_service: {
            name,
            avatar: {
                url
            } = {}
        } = {}
    } = service || {}

    EvilIcons.loadFont()
    AntDesign.loadFont()
    MaterialIcons.loadFont()

    const [serviceStatus, setServiceStatus] = useState(false)
    const [infoModal, setInfoModal] = useState(false)
    const [changePriceModal, setChangePriceModal] = useState(false)

    useEffect(() => { setServiceStatus(status === 'active') }, [])

    const changeServiceStatus = async () => {
        const response = await updateUserService(id, { serviceStatus: !serviceStatus })

        if (!response) {
            setServiceStatus(!serviceStatus)
            showToast("Houve um erro ao completar sua solicitação.")
        }
    }

    const handleDeleteService = async () => {
        const response = await destroyUserService(id)

        if (!response || response?.errors) return showToast('Houve um erro ao completar sua solicitação.')
        if (response) {
            removeFromServices(id)
            showToast("Serviço removido com sucesso.")
        }
    }

    return <View style={[styles.container, shadow]}>
        <View style={styles.informationsView}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Divider />
            </View>

            {/* <Text style={styles.text}>Você teve um total de 0 atendimentos neste serviço.</Text> */}

            <View style={styles.buttonsRow}>
                <EncircleIcon color="red">
                    <EvilIcons
                        name='trash'
                        size={20}
                        color='#FFF'
                        onPress={handleDeleteService}
                    />
                </EncircleIcon>

                {/* <AntDesign
                    name='infocirlce'
                    size={22}
                    color='#198de6'
                    onPress={() => setInfoModal(true)}
                /> */}

                <EncircleIcon color="darkgreen">
                    <MaterialIcons
                        name="attach-money"
                        size={20}
                        color="#FFF"
                        onPress={() => setChangePriceModal(true)}
                    />
                </EncircleIcon>

                <SwitchButton
                    isActive={serviceStatus}
                    command={() => {
                        setServiceStatus(!serviceStatus)
                        changeServiceStatus()
                    }}
                />
            </View>
        </View>

        <ServiceInfoModal
            visible={infoModal}
            closeModal={() => setInfoModal(false)}
        />

        <ChangePriceModal
            visible={changePriceModal}
            closeModal={() => setChangePriceModal(false)}
            service={service}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 20,
        borderRadius: 10,
        flexDirection: "row",
        paddingVertical: 10
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