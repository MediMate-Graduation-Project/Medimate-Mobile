import React from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';
export const WebViewNews = ({ route }) => {
    const {url}= route.params;
    return (
        <View style={{flex:1}}>
            <WebView source={{ uri: url }}></WebView>
        </View>

    )
}