import React from 'react'
import {StyleSheet, FlatList, View, Text} from 'react-native'
import dataQuest from '../helpers/questData'
import QuestItem from '../components/questItem'
import HeaderMenu from "../components/headerMenu";
import LinearGradient from "expo/build/effects/LinearGradient";

class QuestScreen extends React.Component {

    _displayDetailForQuest = (idQuest) => {
        this.props.navigation.navigate('QuestDetailScreen', {idQuest: idQuest});
    };


    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#d537da', '#548ce5']} style={styles.main_container}>
                    <HeaderMenu/>
                    <FlatList
                        style={styles.flatlist_container}
                        data={dataQuest}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <QuestItem quest={item} displayDetailForQuest={this._displayDetailForQuest}/>}
                    />
                </LinearGradient>
            </View>
        )
    }
}

export default QuestScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#00ff00',
    },
    flatlist_container: {
        paddingLeft: '20%',
        paddingTop: 120
    }
});