import React, { useState } from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'

import StarRating from 'react-native-star-rating';
import OrangeButton from '~/components/buttons/Orange'
import { showToast } from '~/helpers/showToast';

const AvaliationModal = ({ visible, closeModal, name, handleAvaliate }) => {

    const [starsQuantity, setStarsQuantity] = useState(0)

    const handleConfirm = () => {
        if (starsQuantity === 0) return showToast("A nota mínima é 1.")

        closeModal()
        setTimeout(() => handleAvaliate(starsQuantity), 1500)
    }

    return <Modal
        visible={visible}
        animationType='fade'
        transparent
    >
        <View style={styles.background}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    <Text>Avalie o produto </Text>
                    <Text style={styles.bold}>{name}</Text>
                </Text>

                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={starsQuantity}
                    selectedStar={setStarsQuantity}
                    starSize={25}
                    containerStyle={styles.starsWrapper}
                    starStyle={styles.star}
                />

                {/* <Text style={styles.text}>Fale um pouco do produto</Text>

                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                    />
                </View> */}

                <View style={styles.buttonsView}>
                    <OrangeButton
                        text='CANCELAR'
                        style={styles.button}
                        command={closeModal}
                    />

                    <OrangeButton
                        text='ENVIAR'
                        style={styles.button}
                        command={handleConfirm}
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