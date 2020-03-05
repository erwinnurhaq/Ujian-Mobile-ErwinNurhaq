import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home';
import DetailRestaurant from '../components/DetailRestaurant';

const Stack = createStackNavigator();

export default (props) => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailRestaurant" component={DetailRestaurant} />
        </Stack.Navigator>
    );
};
