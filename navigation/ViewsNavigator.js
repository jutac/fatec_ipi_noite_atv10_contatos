import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Color from '../constants/Color'
import ListView from '../views/ListView';
import NewContactView from '../views/NewContactView';

const ViewsNavigator = createStackNavigator({
    ContactList: ListView,
    NewContact: NewContactView
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backGroundColor: Platform.OS === 'android' ? Color.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary
    }
});

export default createAppContainer(ViewsNavigator);
