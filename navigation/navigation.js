import { createStackNavigator, createAppContainer, createBottomTabNavigator   } from 'react-navigation'
import QuestScreen from '../screens/questScreen'
import QuestDetailScreen from '../screens/questDetailScreen'
import QuestSpeedyScreen from '../screens/questSpeedyScreen'
import QuestDreamyScreen from '../screens/questDreamyScreen'
import RankingScreen from '../screens/rankingScreen'
import RankingPremiumScreen from '../screens/rankingPremiumScreen'
import ProfilScreen from '../screens/profilScreen'
import ProfilMateScreen from '../screens/profilMateScreen'
import ProfilRankingScreen from '../screens/profilRankingScreen'
import { StyleSheet, Image } from 'react-native';
import React from 'react'

const QuestStackNavigator = createStackNavigator({
    QuestDetailScreen: {
        screen: QuestDetailScreen,
        navigationOptions: {
            header: null
        }
    },
    QuestSpeedyScreen: {
        screen: QuestSpeedyScreen,
        navigationOptions: {
            header: null
        }
    },
    QuestDreamyScreen: {
        screen: QuestDreamyScreen,
        navigationOptions: {
            header: null
        }
    }
});

const SearchStackNavigator = createStackNavigator({
    Quest: {
        screen: QuestScreen,
        navigationOptions: {
            header: null
        }
    },
    QuestDetailScreen: {
        screen: QuestStackNavigator,
        navigationOptions: {
            header: null
        }
    }
});

const ProfilStackNavigator = createStackNavigator({
    Profil: {
        screen: ProfilScreen,
        navigationOptions: {
            header: null
        }
    },
    ProfilMateScreen: {
        screen: ProfilMateScreen,
        navigationOptions: {
            header: null
        }
    }
});

const RankingStackNavigator = createStackNavigator({
    Ranking: {
        screen: RankingScreen,
        navigationOptions: {
            header: null
        }
    },
    ProfilRankingScreen: {
        screen: ProfilRankingScreen,
        navigationOptions: {
            header: null
        }
    },
    RankingPremiumScreen:{
        screen: RankingPremiumScreen,
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
        screen: ProfilStackNavigator,
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
        screen: RankingStackNavigator,
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