import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'


export default function DrawerButtons({ navigation }) {

    Entypo.loadFont()
    AntDesign.loadFont()
    Ionicons.loadFont()
    SimpleLineIcons.loadFont()
    Fontisto.loadFont()

    const Button = ({ icon, label, command }) => <TouchableOpacity
        style={styles.button}
        onPress={command}
    >
        {icon}
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>

    const sectionsButtons = [
        {
            label: 'Serviços',
            command: () => { },
            icon: <Entypo
                name='location-pin'
                size={25}
                style={styles.icon}
            />
        },
        {
            label: 'Meus serviços',
            command: () => { },
            icon: <AntDesign
                name='customerservice'
                size={25}
                style={styles.icon}
            />
        },
        {
            label: 'Meus Dados',
            command: () => { },
            icon: <Ionicons
                name='person'
                size={25}
                style={styles.icon}
            />
        },
        {
            label: 'Meus Cursos',
            command: () => { },
            icon: <Entypo
                name='text-document'
                size={25}
                style={styles.icon}
            />
        },
        {
            label: 'Nossos Produtos',
            command: () => { },
            icon: <SimpleLineIcons
                name='present'
                size={25}
                style={styles.icon}
            />
        },
        {
            label: 'Fale Conosco',
            command: () => { },
            icon: <Fontisto
                name='persons'
                size={25}
                style={styles.icon}
            />
        },
    ]

    return (
        <>
            {sectionsButtons.map((item, index) => <Button
                icon={item.icon}
                label={item.label}
                command={item.command}
                key={index}
            />)}
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    label: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10
    },
    icon: {
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 20
    }
})