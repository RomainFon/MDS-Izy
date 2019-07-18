import { createStackNavigator, createAppContainer, createBottomTabNavigator   } from 'react-navigation'
import QuestScreen from '../screens/questScreen'
import QuestDetailScreen from '../screens/questDetailScreen'
import RankingScreen from '../screens/rankingScreen'
import ProfilScreen from '../screens/profilScreen'
import { StyleSheet, Image } from 'react-native';
import React from 'react'

const SearchStackNavigator = createStackNavigator({
    Quest: {
        screen: QuestScreen,
        navigationOptions: {
            header: null
        }
    },
    QuestDetailScreen: {
        screen: QuestDetailScreen,
        navigationOptions: {
            header: null
        }
    }
});

const IzyTabNavigator = createBottomTabNavigator({
    Quest: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../assets/quest_icon.png')}
                    style={styles.icon}
                />
            }
        }
    },
    Profil: {
        screen: ProfilScreen,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../assets/profil_icon.png')}
                    style={styles.icon}
                />
            }
        }
    },
    Ranking: {
        screen: RankingScreen,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../assets/ranking_icon.png')}
                    style={styles.icon}
                />
            }
        }
    }
},
    {
        tabBarOptions: {
            activeBackgroundColor: '#FAFAFA',
            inactiveBackgroundColor: '#FFF',
            showLabel: false,
            showIcon: true
        }
    });

const styles = StyleSheet.create({
    icon: {
        width: 46,
        height: 46
    }
});

export default createAppContainer(IzyTabNavigator)