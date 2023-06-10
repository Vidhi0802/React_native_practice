import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';
import award_bg from '../Images/award_bg.png'
import girlClap from '../Images/girlClap.png'
import awardPlatform from '../Images/awardPlatform.png'
import main_heart from '../Images/main_heart.png'
import arrow from '../Images/arrow.png'

const Screen2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={award_bg} style={styles.imageBackground}>
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