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
        backgroundColor: '#fff'
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
    postListContainer: {
        width: '100%',
        backgroundColor: 'whitesmoke'
    },
    top: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10
    },
    iconContainer: {
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
        backgroundColor: 'lightgrey',
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
    },
    containerScroll: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

class Home extends Component {

    componentDidMount() {
        this.props.getHomeListPost()
    }

    onPostPress = (post) => {
        this.props.initDetailRestaurant(post);
        this.props.navigation.navigate('DetailRestaurant');
    };

    renderList = () => this.props.homeListPost.listPost ? this.props.homeListPost.listPost.map((post, index) => (
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
    )) : null

    render() {
        return (
            <View style={st.container}>
                <Header
                    leftComponent={<Icon name='ticket-account' type="material-community" size={24} color='#fff' />}
                    containerStyle={st.headerContainer}
                    rightContainerStyle={st.headerTextWrapper}
                    rightComponent={{
                        text: `Halo, ${this.props.user.username}`,
                        style: st.headerText
                    }}
                />
                <ScrollView>
                    <View style={st.containerScroll}>
                        <View style={st.top}>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='credit-card' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Credit</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='food-variant' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Variant</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='food-fork-drink' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Recipe</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='map-marker' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Location</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={st.top}>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='cart' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Cart</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='pizza' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Pizza</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback >
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='hamburger' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>Burger</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={st.iconContainer} >
                                    <View style={st.icon}>
                                        <Icon name='dots-horizontal' type="material-community" size={24} color='tomato' />
                                    </View>
                                    <Text>More</Text>
                                </View>
                            </TouchableWithoutFeedback>
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
