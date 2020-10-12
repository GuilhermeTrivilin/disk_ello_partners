import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { shadow, colors } from '~/commons'
import RoundedButton from '~/components/buttons/Rounded'
import { formatHourFromTimezone, formatToLocalModel } from '~/helpers/formatTime'
import { orderStatus } from '~/values/orderStatus'

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
        client
    } = order

    const path = {
        logo: require("~/assets/logo-02.png")
    }

    const renderButtons = status === 'awaiting_approval' && <View style={styles.buttonsWrapper}>
        <RoundedButton
            text="Aceitar"
            styleContainer={{ width: "30%" }}
            command={() => handleAcceptOrder(id)}
            />
        <RoundedButton
            text="Recusar"
            backgroundColor={colors.red}
            styleContainer={{ width: "30%" }}
            command={() => handleRejectOrder(id)}
        />
    </View>

    return <View style={[styles.container, shadow]}>
        <View style={styles.infosWrapper}>
            <View style={styles}>
                <Text style={styles.label}>Cliente pagador</Text>
                <Text style={styles.label}>Serviço</Text>
                <Text style={styles.label}>Qntd. Clientes</Text>
                <Text style={styles.label}>Status</Text>
                <Text style={styles.label}>Endereço</Text>
                <Text style={styles.label}></Text>
                <Text style={styles.label}>Data</Text>
                <Text style={styles.label}>Horário</Text>
                <Text style={styles.label}>Valor</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {client.name}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {sub_service.name}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {amount_clients}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {orderStatus[status]}
                </Text>
                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {`${street}, ${street_number}, ${neighborhood}, ${city} - ${zipcode}`}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {formatToLocalModel(date)}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    {formatHourFromTimezone(time)}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}
                >
                    R$ 150,00
                </Text>
            </View>
        </View>

        {renderButtons}

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
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        fontWeight: 'bold',
        lineHeight: 25
    },
    text: {
        lineHeight: 25,
        width: '75%'
    },
    logo: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10,
        right: 10
    }
})

export default OrderCard