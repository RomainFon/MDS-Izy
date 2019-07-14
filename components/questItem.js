import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native'

class QuestItem extends React.Component {

    _renderEtat(etat){
        let newEtat = '';
        let newColor = '';
        switch (etat) {
            case 1:
                newEtat = 'Duty en cours';
                newColor = '#4695E5';
                break;
            case 2:
                newEtat = 'Yl Examine';
                newColor = '#feb329';
                break;
            case 3:
                newEtat = 'Yl Approuve';
                newColor = '#1ec117';
                break;
            case 4:
                newEtat = 'Yl Refuse';
                newColor = '#f92a46';
                break;
            default:
                newEtat = '';
        }
        return(
            <View style={styles.container_etat}>
                <Text style={[styles.etat_color, {backgroundColor: newColor}]}> </Text>
                <Text style={styles.etat_text}>{newEtat.toUpperCase()}</Text>
            </View>
        )
    }

    render() {
        const { quest, displayDetailForQuest } = this.props;
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForQuest(quest.id)}>
                { this._renderEtat(quest.etat)}
                <View style={styles.sub_container_logo}>
                    <Image
                        source={require('../assets/tresor.jpg')}
                        style={styles.img_quest}
                    />
                    <Text style={styles.title_text}>{ quest.name.toUpperCase() }</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        marginBottom: 10,
    },
    container_etat: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        paddingVertical: 14,
        alignItems: 'center',
    },
    etat_color: {
        width: 12,
        height: 12,
        borderRadius: 50,
        marginHorizontal: 12

    },
    etat_text: {
        fontWeight: 'bold',
        color: '#888',
        fontSize: 16,
    },
    title_text: {
        position: 'absolute',
        textAlign: 'left',
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 30
    },
    sub_container_logo: {
        flex: 1,
        justifyContent: 'flex-end',
        height: 180
    },
    img_quest: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
    }
});

export default QuestItem