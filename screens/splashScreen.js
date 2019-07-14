import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import MainStyle from "../Style"

class SplashScreen extends React.Component {

    devenirApprenty(){
        this.props.navigation.navigate('RegisterScreen');
    }

    rejoindreIzy(){
        this.props.navigation.navigate('ConnectScreen');
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#825FE2', '#322557']} style={styles.main_container}>
                    <View style={styles.sub_container_logo}>
                        <Image
                            source={require('../assets/icon.png')}
                        />
                    </View>
                    <View style={styles.sub_container_button}>
                        <TouchableOpacity style={MainStyle.button} onPress={() => this.devenirApprenty() }>
                            <Text style={MainStyle.button_text}>Devenir Apprenty</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={MainStyle.button} onPress={() => this.rejoindreIzy()}>
                            <Text style={MainStyle.button_text}>Rejoindre Izy</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default SplashScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    sub_container_logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    sub_container_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});