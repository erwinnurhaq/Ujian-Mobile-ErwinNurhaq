import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Platform, Image, TouchableWithoutFeedback } from 'react-native'
import { Text } from 'native-base';
import { Header, Icon } from 'react-native-elements'

import { getHomeListPost, initDetailRestaurant } from '../actions'
import { ScrollView } from 'react-native-gesture-handler'

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    headerContainer: {
        backgroundColor: 'tomato',
        justifyContent: 'space-around',
        marginTop: Platform.OS === 'ios' ? 0 : -25,
        elevation: 2
    },
    headerTextWrapper: { flex: 3 },
    headerText: {
        color: '#fff', fontSize: 18, fontWeight: '700'
    },
    containerScroll: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    top: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10,
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    iconContainer: {
        width: '25%',
        paddingVertical: 5,
        alignItems: "center"
    },
    icon: {
        width: 42,
        height: 42,
        borderWidth: 1,
        borderRadius: 21,
        borderColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContainer: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingTop: 10
    },
    list: {
        backgroundColor: '#fff',
        width: '46%',
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 5,
        overflow: 'hidden'
    }
})

class Home extends Component {

    state = {
        listTopIcon: [
            { iconName: 'credit-card', text: 'Credit' },
            { iconName: 'food-variant', text: 'Variant' },
            { iconName: 'food-fork-drink', text: 'Recipe' },
            { iconName: 'map-marker', text: 'Location' },
            { iconName: 'cart', text: 'Cart' },
            { iconName: 'pizza', text: 'Pizza' },
            { iconName: 'hamburger', text: 'Burger' },
            { iconName: 'dots-horizontal', text: 'More' },
        ]
    }

    componentDidMount() {
        this.props.getHomeListPost()
    }

    onPostPress = (post) => {
        this.props.initDetailRestaurant(post);
        this.props.navigation.navigate('DetailRestaurant');
    };

    renderTopIcon = () => this.state.listTopIcon.map(i => (
        <TouchableWithoutFeedback key={i.text} >
            <View style={st.iconContainer} >
                <View style={st.icon}>
                    <Icon name={i.iconName} type="material-community" size={24} color='tomato' />
                </View>
                <Text>{i.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    ))

    renderList = () => this.props.homeListPost.listPost.length > 0 ? this.props.homeListPost.listPost.map((post, index) => (
        <TouchableWithoutFeedback onPress={() => this.onPostPress(post)} key={index}>
            <View style={st.list}>
                <Image source={{ uri: `${post.restaurant.thumb}` }} style={{ height: 150, flex: 1 }} />
                <View style={{ flexDirection: 'row', paddingHorizontal: 5, paddingTop: 10 }}>
                    <Icon name='star' type="material-community" size={16} color='gold' />
                    <Text style={{ fontSize: 14 }}>{post.restaurant.user_rating.aggregate_rating}</Text>
                </View>
                <Text style={{ fontWeight: '700', padding: 10 }}>{post.restaurant.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}>Loading...</Text>
            </View>
        )

    render() {
        return (
            <View style={st.container}>
                <Header
                    leftComponent={<Icon name='ticket-account' type="material-community" size={24} color='#fff' />}
                    rightContainerStyle={st.headerTextWrapper}
                    rightComponent={{
                        text: `Halo, ${this.props.user.username}`,
                        style: st.headerText
                    }}
                    containerStyle={st.headerContainer}
                />
                <ScrollView style={{ flex: 1 }}>
                    <View style={st.containerScroll}>
                        <View style={st.top}>
                            {this.renderTopIcon()}
                        </View>
                        <View style={st.listContainer}>
                            {this.renderList()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const stateToProps = ({ user, homeListPost }) => {
    return { user, homeListPost }
}

export default connect(stateToProps, { getHomeListPost, initDetailRestaurant })(Home)
