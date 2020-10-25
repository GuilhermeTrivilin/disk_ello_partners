import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import ManageButtons from './ManageButtons'

import { shadow } from '~/commons'
import { formatHourFromTimezone, formatToLocalModel } from '~/helpers/formatTime'
import { orderStatus } from '~/values/orderStatus'
import { formatBRL } from '~/helpers/formatCurrency'
import QrCodeButton from './QrCodeButton'

const OrderCard = ({ order, handleAcceptOrder, handleRejectOrder }) => {

    const {
        id,
        date,
        time,
        amount_clients,
        city,
        neighborhood,
        street,
        street_number,
        zipcode,
        sub_service,
        status,
        total_value,
        client,
        start_qr_code,
        finish_qr_code,
    } = order

    const path = {
        logo: require("~/assets/logo-02.png")
    }

    const renderManageButtons = status === 'awaiting_approval' && <ManageButtons
        handleAcceptOrder={() => handleAcceptOrder(id)}
        handleRejectOrder={() => handleRejectOrder(id)}
    />

    const renderStartQrCode = status === 'accepted' && <QrCodeButton 
        action="start"
        qrCode={start_qr_code}
    />

    const renderFinishQrCode = status === 'in_progress' && <QrCodeButton 
        action="finish"
        qrCode={finish_qr_code}
    />

    return <View style={[styles.container, shadow]}>
        <View style={styles.infosWrapper}>
            <View style={styles}>
                <Text>
                    <Text style={styles.label}>Cliente pagador: </Text>
                    <Text>{client.name}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Serviço: </Text>
                    <Text>{sub_service.name}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Qntd. Clientes: </Text>
                    <Text>{amount_clients}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Status: </Text>
                    <Text>{orderStatus[status]}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Endereço: </Text>
                    <Text>{`${street}, ${street_number}, ${neighborhood}, ${city} - ${zipcode}`}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Data: </Text>
                    <Text>{formatToLocalModel(date)}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Horário: </Text>
                    <Text>{formatHourFromTimezone(time)}</Text>
                </Text>

                <Text>
                    <Text style={styles.label}>Valor: </Text>
                    <Text>{formatBRL(total_value)}</Text>
                </Text>

            </View>
        </View>

        {renderManageButtons}
        {renderStartQrCode}
        {renderFinishQrCode}

        <Image
            source={path.logo}
            style={styles.logo}
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
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: 'gray',
        marginHorizontal: 10
    },
    infosWrapper: {
        flexDirection: 'row',
        marginBottom: 20
    },
    label: {
        fontWeight: 'bold',
        lineHeight: 25
    },
    logo: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10,
        right: 10
    },
})

export default OrderCard