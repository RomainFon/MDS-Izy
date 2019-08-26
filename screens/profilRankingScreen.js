import React from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";

class ProfilRankingScreen extends React.Component {

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#ca8d21', '#f452b7']} style={styles.main_container}>
                    <HeaderMenu/>
                    <View style={styles.content_container}>
                        <Text style={styles.name_team}>WILDCATS</Text>
                        <View style={styles.img_team_container}>
                            <Image
                                source={require('../assets/team_logo.png')}
                                style={styles.img_team}
                            />
                        </View>
                        <View style={styles.info_container}>
                            <Text style={styles.info_txt}>Cooky</Text>
                            <Text style={styles.info_nbr}>200</Text>
                        </View>
                        <View style={styles.info_container}>
                            <Text style={styles.info_txt}>Broccoly</Text>
                            <Text style={styles.info_nbr}>3</Text>
                        </View>
                        <View style={styles.info_container}>
                            <Text style={styles.info_txt}>Classement</Text>
                            <Text style={styles.info_nbr}>5</Text>
                        </View>
                        <Text style={styles.line_separation}> </Text>
                        <View style={styles.info_container}>
                            <Text style={styles.info_txt}>Tymemate</Text>
                            <Text style={styles.info_nbr}>2</Text>
                        </View>
                        <View style={styles.img_list_mate_container}>
                            <View style={styles.img_mate_container}>
                                <TouchableOpacity onPress={this._displayProfilMate}>
                                    <Image
                                        source={require('../assets/mate_logo.png')}
                                        style={styles.img_mate}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.name_mate}>Romain</Text>
                            </View>
                            <View style={styles.img_mate_container}>
                                <TouchableOpacity onPress={this._displayProfilMate}>
                                    <Image
                                        source={require('../assets/mate_logo.png')}
                                        style={styles.img_mate}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.name_mate}>Gaby</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default ProfilRankingScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    content_container:{
        paddingTop: 120
    },
    name_team:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    img_team_container: {
        alignItems: 'center',
        marginVertical: 20
    },
    img_team: {
        width: 160,
        height: 160,
    },
    info_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    info_txt: {
        width: 120,
        textAlign: 'left',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    info_nbr:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'left'
    },
    line_separation: {
        height: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 50
    },
    img_list_mate_container:{
        flexDirection: 'row',
        marginHorizontal: 40,
        justifyContent: 'center'
    },
    img_mate_container:{
        marginHorizontal: 20,
        alignItems: 'center'
    },
    img_mate:{
        width: 100,
        height: 100,
    },
    name_mate:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});