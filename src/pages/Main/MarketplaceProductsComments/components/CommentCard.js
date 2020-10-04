import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import RenderStars from '~/components/RenderStars'
import { shadow } from '~/commons'

const CommentCard = ({ item }) => {

    const { avaliation, name, comment } = item

    const [extended, setExtended] = useState(false)

    const renderComment = extended ?
        <>
            <Text
                style={styles.text}
            >
                {comment}
            </Text>
            <TouchableOpacity onPress={() => setExtended(!extended)}>
                <Text style={styles.readMore}>LER MENOS</Text>
            </TouchableOpacity>
        </>
        :
        <>
            <Text
                style={styles.text}
                numberOfLines={2}
                ellipsizeMode='tail'
            >
                {comment}
            </Text>
            <TouchableOpacity onPress={() => setExtended(!extended)}>
                <Text style={styles.readMore}>LER MAIS</Text>
            </TouchableOpacity>
        </>

    return <View style={[styles.container, shadow]}>
        {renderComment}

        <View style={styles.rowView}>
            <Text style={styles.text}>{name}</Text>
            <RenderStars stars_length={avaliation} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 15,
        justifyContent: 'center',
        borderRadius: 20
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    readMore: {
        textAlign: 'right',
        marginTop: 5,
        fontWeight: 'bold',
        color: '#56545D'
    },
    text: {
        fontSize: 16,
        lineHeight: 23
    }
})

export default CommentCard