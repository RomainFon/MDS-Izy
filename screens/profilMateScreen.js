import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";

class ProfilMateScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#ca8d21', '#f452b7']} style={styles.main_container}>
                    <HeaderMenu/>
                    <View style={styles.content_container}>
                        <Text style={styles.name_mate}>Romain</Text>
                        <View style={styles.img_mate_container}>
                            <Image
                                source={require('../assets/mate_logo.png')}
                                style={styles.img_mate}
                            />
                        </View>
                        <View style={styles.info_container}>
                            <Text style={styles.info_txt}>Cooky</Text>
                            <Text style={styles.info_nbr}>100</Text>
                        </View>
                        <Text style={styles.line_separation}> </Text>
                        <View style={styles.img_list_bonus_container}>
                            <View style={styles.img_bonus_container}>
                                    <Image
                                        source={require('../assets/bonus_logo.png')}
                                        style={styles.img_bonus}
                                    />
                            </View>
                            <View style={styles.img_bonus_container}>
                                <Image
                                    source={require('../assets/bonus_logo.png')}
                                    style={styles.img_bonus}
                                />
                            </View>
                            <View style={styles.img_bonus_container}>
                                <Image
                                    source={require('../assets/bonus_logo.png')}
                                    style={styles.img_bonus}
                                />
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default ProfilMateScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    content_container:{
        paddingTop: 120
    },
    name_mate:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    img_mate_container: {
        alignItems: 'center',
        marginVertical: 20
    },
    img_mate: {
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
    img_list_bonus_container:{
        flexDirection: 'row',
        marginHorizontal: 40,
        justifyContent: 'center'
    },
    img_bonus_container:{
        marginHorizontal: 10,
        alignItems: 'center'
    },
    img_bonus:{
        width: 75,
        height: 70,
    },
});