import React from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native'

const SwitchButton = ({
    isActive,
    command
}) => {

    const renderCircle = (buttonStatus) => buttonStatus === !!isActive && <View style={styles.circle} />

    return <TouchableOpacity
        style={[styles.wrapper, { backgroundColor: isActive ? 'green' : 'red' }]}
        onPress={command}
    >
        <View style={styles.circleWrapper}>
            {renderCircle(false)}
        </View>

        <View style={styles.circleWrapper}>
            {renderCircle(true)}
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    wrapper: {
        width: 50,
        height: 25,
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 20
    },
    circleWrapper: {
        flex: 1
    },
    circle: {
        backgroundColor: '#c3c3c3',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})

export default SwitchButton