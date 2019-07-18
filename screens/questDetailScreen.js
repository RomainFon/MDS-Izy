import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";

class QuestDetailScreen extends React.Component {
    render() {
        console.log('Quest Detail');
        console.log(this.props);
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#d537da', '#548ce5']} style={styles.main_container}>
                    <HeaderMenu/>
                    <View style={styles.page_container}>
                        <View style={styles.header_quest_container}>
                            <Image
                                source={require('../assets/tresor.jpg')}
                                style={styles.img_quest}
                            />
                            <Text style={styles.title_quest}>NOM DE LA QUETE</Text>
                        </View>
                        <View style={styles.body_quest_container}>
                            <View style={styles.reward_container}>
                                <Text style={styles.reward_quest}>+ 200 cooky</Text>
                            </View>
                            <View style={styles.desc_container}>
                                <Text style={styles.desc_quest}>Répondre aux questions et trouver les indices afin d'obtenir la carte au trésor...</Text>
                            </View>
                            <View style={styles.button_container}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.button_text}>M'y essayer</Text>
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
        paddingTop: 120
    },
    header_quest_container: {
        height: 300
    },
    img_quest: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title_quest: {
        color: '#fff',
        backgroundColor: "#286C49",
        position: "absolute",
        paddingVertical: 8,
        paddingHorizontal: 18,
        fontSize: 16,
        borderRadius: 30,
        borderColor: "#fff",
        borderWidth: 2,
        marginTop: 30,
        marginLeft: 20
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
    },
    button:{
        backgroundColor: '#144464',
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:14,
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

export default connect(mapStateToProps)(QuestDetailScreen)