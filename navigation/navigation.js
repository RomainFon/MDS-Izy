import { createStackNavigator, createAppContainer, createBottomTabNavigator   } from 'react-navigation'
import QuestScreen from '../screens/questScreen'
import QuestDetailScreen from '../screens/questDetailScreen'
import RankingScreen from '../screens/rankingScreen'
import ProfilScreen from '../screens/profilScreen'

const SearchStackNavigator = createStackNavigator({
    Quest: {
        screen: QuestScreen,
        navigationOptions: {
            header: null
        }
    },
    QuestDetailScreen: {
        screen: QuestDetailScreen
    }
});

const IzyTabNavigator = createBottomTabNavigator({
    Quest: {
        screen: SearchStackNavigator
    },
    Profil: {
        screen: ProfilScreen
    },
    Ranking: {
        screen: RankingScreen
    }
});

export default createAppContainer(IzyTabNavigator)