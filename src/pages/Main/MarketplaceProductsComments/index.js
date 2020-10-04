import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import MarketplaceLayout from '~/components/MarketplaceLayout'
import RenderStars from '~/components/RenderStars'
import CommentCard from './components/CommentCard'

const TEMP_INFO = [
    {
        name: 'Bruna Carla',
        comment: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
        avaliation: 3
    }
]

export default function MarketplaceProductsComments({ navigation }) {

    return (
        <MarketplaceLayout
            title='Comentários do produto'
            navigation={navigation}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.rowView}>
                        <Text style={styles.text}>Avaliação Geral</Text>
                        <Text style={styles.avaliation}>3</Text>
                    </View>

                    <RenderStars stars_length={3} size={35} />
                </View>

                <View style={styles.commentsView}>
                    <Text style={styles.label}>Principais comentários</Text>

                    <FlatList 
                        data={TEMP_INFO}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <CommentCard item={item} />}
                    />
                </View>
            </View>
        </MarketplaceLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingBottom: 25
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        fontSize: 18
    },
    avaliation: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 25
    },
    commentsView: {
        paddingHorizontal: 20,
        backgroundColor: '#F0EFF4',
        flex: 1
    }
})