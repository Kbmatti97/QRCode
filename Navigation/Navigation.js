import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../Components/Menu'


const MenuStackNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: {
            title: 'Repondre'
        }
    }
})

export default createAppContainer(MenuStackNavigator)