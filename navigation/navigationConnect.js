import { createStackNavigator, createAppContainer  } from 'react-navigation'
import SplashScreen from '../screens/splashScreen'
import ConnectScreen from '../screens/connectScreen'
import RegisterScreen from '../screens/registerScreen'
import CreateTeamScreen from '../screens/createTeamScreen'

const RegisterStackNavigator = createStackNavigator({
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: {
            header: null
        }
    },
    CreateTeamScreen: {
        screen: CreateTeamScreen,
        navigationOptions: {
            header: null
        }
    }

});

const ConnectStackNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    ConnectScreen: {
        screen: ConnectScreen,
        navigationOptions: {
            header: null
        }
    },
    RegisterScreen: {
        screen: RegisterStackNavigator,
        navigationOptions: {
            header: null
        }
    }
});


export default createAppContainer(ConnectStackNavigator)