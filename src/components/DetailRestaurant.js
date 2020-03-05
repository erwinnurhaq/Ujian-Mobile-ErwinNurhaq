import React, { Component } from 'react'
import { Header } from 'react-native-elements';
import { Text, View, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

const st = StyleSheet.create({
    detailContainer: {
        padding: 15
    },
    detail: {
        width: '100%',
        flexDirection: 'row'
    },
    textLeft: {
        flex: 1
    },
    textRight: {
        flex: 4
    }
})

class DetailRestaurant extends Component {
    render() {
        console.log(this.props.detailResto)
        return (
            <View>
                <Header
                    placement="left"
                    centerComponent={{
                        text: `${this.props.detailResto.name}`,
                        style: { color: '#fff', fontSize: 18, fontWeight: '700' }
                    }}
                    leftComponent={{
                        icon: 'arrow-back',
                        color: '#fff',
                        onPress: () => this.props.navigation.goBack()
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : -25,
                        elevation: 2
                    }}
                />
                <View style={st.detail}>
                    <Image source={{ uri: `${this.props.detailResto.thumb}` }} style={{ height: 180, flex: 1 }} />
                </View>
                <View style={st.detailContainer}>
                    <View style={st.detail}>
                        <Text style={st.textLeft}>Rating</Text>
                        <Text style={st.textRight}>: {this.props.detailResto.user_rating.aggregate_rating}</Text>
                    </View>
                    <View style={st.detail}>
                        <Text style={st.textLeft}>Address</Text>
                        <Text style={st.textRight}>: {this.props.detailResto.location.address}, {this.props.detailResto.location.locality}, {this.props.detailResto.location.city}</Text>
                    </View>
                    <View style={st.detail}>
                        <Text style={st.textLeft}>Cuisines</Text>
                        <Text style={st.textRight}>: {this.props.detailResto.cuisines}</Text>
                    </View>
                    <View style={st.detail}>
                        <Text style={st.textLeft}>Open</Text>
                        <Text style={st.textRight}>: {this.props.detailResto.timings}</Text>
                    </View>
                    <View style={st.detail}>
                        <Text style={st.textLeft}>Cost for 2</Text>
                        <Text style={st.textRight}>: {this.props.detailResto.average_cost_for_two}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const stateToProps = ({ detailResto }) => {
    return { detailResto: detailResto.restaurant }
}

export default connect(stateToProps)(DetailRestaurant)
