import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <Text
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
            </Text>
        )
    }
}