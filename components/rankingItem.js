import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native'

class RankingItem extends React.Component {

    render() {
        const { team, displayDetailForQuest } = this.props;
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForQuest(team.id)}>
                <Text style={styles.rank_team}>{team.rank}</Text>
                <Image
                    source={require('../assets/team_logo.png')}
                    style={styles.img_team}
                />
                <Text style={styles.name_team}>{team.name}</Text>
                <Text style={styles.cooky_team}>{team.cooky} Cooky</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rank_team:{
        color: '#fff',
        fontWeight: 'bold',
        width: 30,
        fontSize: 16
    },
    img_team:{
        width: 80,
        height: 80
    },
    name_team:{
        width: 110,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft:  10
    },
    cooky_team:{
        width: 110,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default RankingItem