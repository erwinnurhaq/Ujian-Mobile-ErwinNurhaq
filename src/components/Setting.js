import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import { onUserLogout } from '../actions';

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: 'lightskyblue',
        width: '25%'
    }
});

class Setting extends Component {
    componentDidUpdate() {
        if (!this.props.user.username) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            });
            this.props.rootStackNavigation.dispatch(resetAction);
        }
    }
    render() {
        return (
            <View style={st.container}>
                <Button
                    title="Log Out"
                    containerStyle={st.buttonContainer}
                    titleStyle={{ color: '#fff' }}
                    type="outline"
                    onPress={this.props.onUserLogout}
                />
            </View>
        )
    }
}

const stateToProps = ({ user }) => {
    return { user };
};

export default connect(stateToProps, { onUserLogout })(Setting);