import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import HomeNav from './HomeNav';
import Setting from '../components/Setting';

const Tab = createBottomTabNavigator();

const SettingsPage = nav => {
    return (({ navigation }) => <Setting navigation={navigation} rootStackNavigation={nav} />)
}

export default ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNav"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeNav') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'cogs' : 'cogs';
                    }

                    return <Icon name={iconName} type="material-community" size={35} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="HomeNav" component={HomeNav} />
            <Tab.Screen name="Setting">
                {SettingsPage(navigation)}
            </Tab.Screen>
        </Tab.Navigator>
    );
};
