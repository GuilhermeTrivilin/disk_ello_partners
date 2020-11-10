import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Divider from '~/components/Divider'
import { shadow } from '~/commons'

export const Card = ({ icon, title, content }) => <View style={[styles.container, shadow]}>
    <View style={styles.cardTitle}>
        {icon}
        <Text style={styles.title}>{title}</Text>
    </View>

    <Divider width='90%' />

    {content}
</View>

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        borderRadius: 20
    },
    cardTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 15
    },
})