import React from 'react'
import {StyleSheet, View, Text, FlatList } from 'react-native';
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";
import dataRanking from '../helpers/rankingPremiumData'
import RankingItem from '../components/rankingItem'


class RankingPremiumScreen extends React.Component {

    _displayDetailForQuest = (idTeam) => {

    };


    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#ca8d21', '#f452b7']} style={styles.main_container}>
                    <HeaderMenu/>
                    <View style={styles.content_container}>
                        <Text style={styles.name_ranking}>Classement Premyum</Text>
                    </View>
                        <FlatList
                            style={styles.flatlist_content}
                            data={dataRanking}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <RankingItem team={item} displayDetailForQuest={this._displayDetailForQuest}/>}
                        />
                </LinearGradient>
            </View>
        )
    }
}

export default RankingPremiumScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    content_container:{
        paddingTop: 120
    },
    name_ranking:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    flatlist_container:{
        height: 420
    },
    flatlist_content:{
        marginHorizontal: 30,
        marginTop: 40,

    }
});