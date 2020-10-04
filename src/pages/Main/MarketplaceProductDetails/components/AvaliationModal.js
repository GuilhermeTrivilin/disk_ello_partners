import React from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'
import RenderStars from '~/components/RenderStars'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '~/commons'
import OrangeButton from '~/components/buttons/Orange'

const AvaliationModal = ({ visible, closeModal }) => {

    return <Modal
        visible={visible}
        animationType='fade'
        transparent
    >
        <View style={styles.background}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    <Text>Quantas estrelas você dá para esse</Text>
                    <Text style={styles.bold}> produto?</Text>
                </Text>

                <RenderStars stars_length={3} size={25} />

                <Text style={styles.text}>Fale um pouco do produto</Text>

                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                    />
                </View>

                <View style={styles.buttonsView}>
                    <OrangeButton 
                    text='CANCELAR' 
                    style={styles.button}
                    command={closeModal} 
                    />
                    <OrangeButton 
                    text='ENVIAR' 
                    style={styles.button} 
                    command={() => {}}
                    />
                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderTopWidth: 20,
        borderTopColor: '#F43820'
    },
    viewInput: {
        width: '90%',
        height: 200,
        borderWidth: 1,
        borderColor: '#F43820',
        borderRadius: 15
    },
    input: {
        flex: 1,
        textAlignVertical: 'top'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 25
    },
    bold: {
        fontWeight: 'bold'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20
    },
    button: {
        width: '45%'
    }
})

export default AvaliationModal