import { createStackNavigator, createAppContainer  } from 'react-navigation'
import choiceTeamScreen from '../screens/choiceTeamScreen'
import createTeamScreen from '../screens/createTeamScreen'

const TeamStackNavigator = createStackNavigator({
    ChoiceTeamScreen: {
        screen: choiceTeamScreen,
        navigationOptions: {
            header: null
        }
    },
    CreateTeamScreen: {
        screen: createTeamScreen,
        navigationOptions: {
            header: null
        }
    }
});


export default createAppContainer(TeamStackNavigator)