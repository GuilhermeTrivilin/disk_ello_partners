import React from 'react';
import { StyleSheet } from 'react-native';

import { colors } from '~/commons'
import { DrawerItem } from '@react-navigation/drawer';

export default function DrawerButtons({ navigation }) {

    const DrawerButton = ({ icon, label, command }) => <DrawerItem
        label={label}
        onPress={command}

        icon={() => <>{icon}</>}
        labelStyle={styles.label}
        style={styles.button}
    />

    const sectionsButtons = [
        {
            label: 'Serviços',
            command: () => {},
        },
        {
            label: 'Meus serviços',
            command: () => {},
        },
        {
            label: 'Meus Dados',
            command: () => {},
        },
        {
            label: 'Meus Cursos',
            command: () => {},
        },
        {
            label: 'Nossos Produtos',
            command: () => {},
        },
        {
            label: 'Fale Conosco',
            command: () => {},
        },
    ]

    return (
        <>
            {sectionsButtons.map((item, index) => <DrawerButton
                icon={item.icon}
                label={item.label}
                command={item.command}
                key={index}
            />)}
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        color: colors.blue,
        marginLeft: -10
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
})