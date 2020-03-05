import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { StackActions } from '@react-navigation/native';

import { onUserLogin, onInputText, userLoginCheck } from '../actions';

const st = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputContainer: {
        marginTop: 50,
        marginBottom: 50,
        width: '95%'
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    splashText: {
        color: '#fff'
    }
});

class LoginForm extends Component {
    componentDidMount() {
        this.props.userLoginCheck();
    }

    componentDidUpdate() {
        if (this.props.user.username) {
            this.props.navigation.dispatch(StackActions.replace('TabNav'));
        }
    }

    onBtnLoginPress = () => {
        this.props.onUserLogin(this.props.loginForm.username);
    };

    render() {
        console.log(this.props.user.authChecked, this.props.user.username)
        if (this.props.user.authChecked) {
            return (
                <View style={st.container}>
                    <Animatable.Text animation="fadeInDown" duration={2000}>
                        <Text h1 style={{ color: 'tomato' }}>TomatoApp</Text>
                    </Animatable.Text>
                    <Icon name='food' type="material-community" size={96} color='tomato' />
                    <View style={st.inputContainer}>
                        <Input
                            placeholder="Username"
                            leftIcon={<Icon name="person" size={24} color="tomato" />}
                            value={this.props.loginForm.username}
                            onChangeText={(val) => this.props.onInputText('username', val)}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{this.props.loginForm.error}</Text>
                    <Button
                        title="Enter"
                        containerStyle={{ width: '95%', marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: 'tomato' }}
                        onPress={this.onBtnLoginPress}
                        loading={this.props.loginForm.loading}
                    />
                </View>
            );
        }

        return (
            <View style={st.splashContainer}>
                <Text h1 style={st.splashText}>TomatoApp</Text>
                <Icon name='food' type="material-community" size={96} color='#fff' />
            </View>
        );
    }
}

const stateToProps = ({ user, loginForm }) => {
    return { user, loginForm };
};

export default connect(stateToProps, { onUserLogin, onInputText, userLoginCheck })(LoginForm);
