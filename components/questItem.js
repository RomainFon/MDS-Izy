import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

class QuestItem extends React.Component {

    render() {
        const { quest, displayDetailForQuest } = this.props;
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForQuest(quest.id)}>
                <Text style={styles.title_text}>{ quest.name }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190
    },
    title_text: {

    }
})

export default QuestItem