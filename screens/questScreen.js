import React from 'react'
import {StyleSheet, FlatList, View, Text} from 'react-native'
import dataQuest from '../helpers/questData'
import QuestItem from '../components/questItem'

class QuestScreen extends React.Component {

    _displayDetailForQuest = (idQuest) => {
        console.log("quest with id: "+idQuest);
        this.props.navigation.navigate('QuestDetailScreen', {idQuest: idQuest});
    };


    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={dataQuest}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <QuestItem quest={item} displayDetailForQuest={this._displayDetailForQuest}/>}
                />
            </View>
        )
    }
}

export default QuestScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});