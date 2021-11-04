
//documentacion https://docs.expo.dev/versions/latest/sdk/lottie/
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

// create a component

const Loader = () => {
    return (
        
        <View style={[ StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require("../assets/loader.json")} 
            autoPlay={true} 
            loop={true}
            />
        </View>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 300,
        zIndex: 1,
        margin: 70, 
    },
});

export default Loader;

