import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, Text, TouchableOpacity,Animated } from 'react-native';
import award_bg from '../Images/award_bg.png'
import girlClap from '../Images/girlClap.png'
import awardPlatform from '../Images/awardPlatform.png'
import main_heart from '../Images/main_heart.png'
import arrow from '../Images/arrow.png'
import avtar2 from '../Images/avtar2.png'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

const Screen2 = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Screen3');
        }, 20000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    const avatarAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.timing(avatarAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const avatarTranslateX = avatarAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
    });



    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={award_bg} style={styles.imageBackground}>
                <Animated.View style={[styles.avatarContainer, { transform: [{ translateX: avatarTranslateX }] }]}>
                    <Image source={avtar2} style={styles.avatarImage} resizeMode='contain' />
                    <Text style={styles.avatarText}>D-lister</Text>
                </Animated.View>
                <Text style={styles.text}>Gave U Some Love</Text>
                <Image source={main_heart} style={styles.heart} resizeMode='contain'/>
                <Image source={awardPlatform} style={styles.stage} resizeMode='contain' />
                <Image source={girlClap} style={styles.girl} resizeMode='contain' />
                <TouchableOpacity>
                    <Image source={arrow} style={styles.arrow} resizeMode='contain' />
                </TouchableOpacity> 
                <Text style={styles.text2}>15000</Text>
            </ImageBackground>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        top: 20,
        right: 20,
        opacity: 0,
        bottom: 0,
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    avatarText: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10,
        color: 'yellow',
    },
    heart: {
        position: 'absolute',
        top: 250,
        width: 250, // Adjust as needed
        height: 150, // Adjust as needed
    },
    text: {
        fontSize: 25,
        fontWeight: '400',
        marginTop: 350, // Adjust as needed
        color: 'yellow',
    },
    girl: {
        width: 300,
        height: 300,
        top: -170,
    },
    stage: {
        width: 400,
        height: 400,
        top: 350,
    },
    arrow:{
        width: 45,
        height: 45,
        marginLeft: 260,
        top: -370,
    },
    text2:{
        fontSize: 40,
        fontWeight: '400', // Adjust as needed
        color: 'yellow',
        top: -630,
    }
});

export default Screen2;