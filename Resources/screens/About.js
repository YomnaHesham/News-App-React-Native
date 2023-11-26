import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class About extends React.Component {
    pageTitle = "About Page";
    componentDidMount(){
        AsyncStorage.setItem("visited" , true)
    }
    render() {
        return (
            <View style={{flex:1 }}>
                <Header pageTitle={this.pageTitle} navigation={this.props.navigation}/>

                <View style={{ flex: 1, paddingLeft: 10 ,marginBottom:57 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom: 25 }}>About Us:</Text>

                    <View style={{ flex: 4, flexDirection: "row", backgroundColor: "#eee", alignItems: "center", justifyContent: "center", marginBottom: 40 }}>

                        <View style={{ flex: 2 }}>
                            <Image source={require('../imgs/photo.jpg')} style={{ width: 170, height: 170, borderRadius: 170 }} />
                        </View>

                        <View style={{ flex: 2, justifyContent: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20 }}>Title</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse odio harum voluptas molestias!</Text>
                        </View>
                    </View>

                    <View style={{ flex: 4, flexDirection: "row", backgroundColor: "#eee", alignItems: "center", justifyContent: "center", marginBottom: 40 }}>

                        <View style={{ flex: 2 }}>
                            <Image source={require('../imgs/photo.jpg')} style={{ width: 170, height: 170, borderRadius: 170 }} />
                        </View>

                        <View style={{ flex: 2, justifyContent: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20 }}>Title</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse odio harum voluptas molestias!</Text>
                        </View>
                    </View>

                </View>

                <Footer navigation={this.props.navigation} />

            </View>

        )
    }
}