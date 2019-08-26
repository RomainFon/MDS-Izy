import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";


class QuestDreamyScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#ca8d21', '#f452b7']} style={styles.main_container}>
                    <HeaderMenu/>
                    <View style={styles.page_container}>
                        <Text style={styles.text_quest}>Reste</Text>
                        <Text style={styles.time_quest}>03 : 12 : 32 : 12</Text>
                        <View style={styles.img_add_container}>
                            <Image
                                source={require('../assets/logo_add.png')}
                                style={styles.img_add}
                            />
                            <Text style={styles.text_add}>Ajouter une image</Text>
                        </View>

                        <View style={styles.button_container}>
                            <TouchableOpacity style={styles.button} onPress={this._displayQuestSpeedy}>
                                <Text style={styles.button_text}>Valider</Text>
                            </TouchableOpacity>
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
    page_container:{
        marginTop: 120,
    },
    text_quest:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    },
    time_quest:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32
    },
    img_add_container:{
        alignItems: 'center',
        marginVertical: 160
    },
    img_add: {
        width: 32,
        height: 30
    },
    text_add:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 40,
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
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(QuestDreamyScreen)