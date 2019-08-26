import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";


class QuestSpeedyScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#d537da', '#548ce5']} style={styles.main_container}>
                    <HeaderMenu/>


                    <View style={styles.page_container}>
                        <View style={styles.container_chrono}>
                            <Image
                                source={require('../assets/logo_chrono.png')}
                                style={styles.img_chrono}
                            />
                            <Text style={styles.time_chrono}/>
                        </View>
                        <View style={styles.header_quest_container}>
                            <Image
                                source={require('../assets/tresor.jpg')}
                                style={styles.img_quest}
                            />
                        </View>
                        <View style={styles.body_quest_container}>
                            <View style={styles.desc_container}>
                                <Text style={styles.desc_quest}>Répondre aux questions et trouver les indices afin d'obtenir la carte au trésor...</Text>
                            </View>
                        </View>

                        <View style={styles.footer_quest_container}>
                            <TextInput style={styles.input_form}/>
                            <View style={styles.button_container}>
                                <TouchableOpacity style={styles.button} onPress={this._displayQuestSpeedy}>
                                    <Text style={styles.button_text}>Valider</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    page_container: {
        paddingTop: 120,
        marginHorizontal: 30
    },
    header_quest_container: {
        height: 200
    },
    img_quest: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    body_quest_container: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    reward_container:{
        flexDirection: 'row'
    },
    reward_quest: {
        color: "#FEB329",
        borderColor: "#FEB329",
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 20
    },
    desc_container: {
        width: "80%",
        marginLeft: "10%",
        marginVertical: 30
    },
    desc_quest: {
        color: '#888',
        fontSize: 15,
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 40,
        flex: 3
    },
    button:{
        backgroundColor: '#65aeff',
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:4,
    },
    button_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer_quest_container:{
        flexDirection: 'row'
    },
    input_form: {
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        height: 40,
        paddingLeft: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        flex: 5
    },
    container_chrono:{
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center'
    },
    img_chrono:{
        width: 40,
        height: 45
    },
    time_chrono:{
        height: 20,
        width: 270,
        marginLeft: 10,
        backgroundColor: '#65aeff',
        borderRadius: 20
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(QuestSpeedyScreen)