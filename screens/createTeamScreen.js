import React from 'react'
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import MainStyle from "../Style";

class CreateTeamScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#FCB129', '#F34FC3']} style={styles.main_container}>
                    <View>
                        <Text>Create Team</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../assets/icon_user.png')}
                        />
                    </View>
                    <View style={MainStyle.content_form}>
                        <Text style={MainStyle.text_form}>E-mail</Text>
                        <TextInput style={MainStyle.input_form}/>
                    </View>
                    <View style={MainStyle.button_container}>
                        <TouchableOpacity style={MainStyle.button} onPress={() => this._submitFormConnect()}>
                            <Text style={MainStyle.button_text}>Former</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default CreateTeamScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});