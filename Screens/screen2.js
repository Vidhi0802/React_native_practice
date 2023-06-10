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
    const avatarAnimation = useRef(new Animated.Value(0)).current;
    const textAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startAnimation();
        const timeout = setTimeout(() => {
            navigation.navigate('Screen3');
        }, 20000);

        return () => clearTimeout(timeout);
    }, []);

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(avatarAnimation, {
                    toValue: 1,
                    duration: 2000, // Adjust the duration as needed (slower speed)
                    useNativeDriver: true,
                }),
                Animated.delay(3000), // Delay before starting the exit animation (adjust as needed)
                Animated.parallel([
                    Animated.timing(avatarAnimation, {
                        toValue: 0,
                        duration: 2000, // Adjust the duration as needed (slower speed)
                        useNativeDriver: true,
                    }),
                    Animated.timing(textAnimation, {
                        toValue: 1,
                        duration: 2000, // Adjust the duration as needed (slower speed)
                        useNativeDriver: true,
                    }),
                ]),
                Animated.delay(3000), // Delay before starting the next loop (adjust as needed)
            ]),
            { iterations: -1 } // -1 for an infinite loop
        ).start();
    };
    const avatarTranslateX = avatarAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [200, -200], // Adjust the values to control the entry and exit positions
    });

    const textTranslateX = textAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [200, -200], // Adjust the values to control the entry and exit positions
    });

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={award_bg} style={styles.imageBackground}>
                <Animated.View style={[styles.avatarContainer, { transform: [{ translateX: avatarTranslateX }] }]}>
                    <Image source={avtar2} style={styles.avatarImage} resizeMode='contain' />
                    <Animated.Text style={[styles.avatarText, { transform: [{ translateX: textTranslateX }] }]}>D-lister</Animated.Text>
                </Animated.View>
                <Text style={styles.text}>Gave U Some Love</Text>
                <Image source={main_heart} style={styles.heart} resizeMode='contain'/>
                <Image source={awardPlatform} style={styles.stage} resizeMode='contain' />
                <Image source={girlClap} style={styles.girl} resizeMode='contain' />
                <TouchableOpacity onPress={()=>navigation.navigate('Screen3')}>
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
        top: 60,
        right: 135,
        //backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add background color to ensure visibility
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