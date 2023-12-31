import React from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

export default class Footer extends React.Component {

    render() {
        return (
            <View>
                <View style={{ backgroundColor: "#09c", flexDirection: 'row', alignItems: "center", justifyContent: "space-around", paddingHorizontal: 30 }}>
                    {/* Info Icon */}
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('About')
                    }} style={{ padding: 10 }}>
                        <Ionicons name="md-information-circle" size={32} color="#fff" />
                    </TouchableOpacity>

                    {/*Whatsapp Icon */}
                    
                    <TouchableOpacity onPress={() =>  Linking.openURL('whatsapp://send?text=Hello&phone=+201016002579')}
                        style={{ padding: 10 }}>
                        <Ionicons name="md-logo-whatsapp" size={32} color="#fff" />
                    </TouchableOpacity>

                    {/*Home Icon */}
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Home')
                    }} style={{ padding: 10 }}>
                        <Ionicons name="home-sharp" size={30} color="#fff" />
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}