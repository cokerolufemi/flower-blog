import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { Image } from 'react-native';


const Preview = ({ route }) => {
    const { img, Heading, Owner, Time, User, Article } = route.params
    const [fontsloaded] = useFonts({
        Poppins_Black: require("../../assets/fonts/poppins/Poppins-Black.ttf"),
        Poppins_Medium: require("../../assets/fonts/poppins/Poppins-Medium.ttf")
    })

    if (!fontsloaded) {
        return null
    }

    return (
        <View style={styles.Maincontainer}>
            <View style={styles.imgBefore}></View>
            <Image source={img} style={styles.Img} />
            <View>
                <Text style={styles.Heading}>{Heading}</Text>
                <View style={styles.UserContainer}>
                    <Image source={User} style={styles.Profile} />
                    <Text style={styles.Owner}>{Owner}</Text>
                    <View style={styles.dot}></View>
                    <Text style={styles.Time}>{Time}</Text>
                </View>
                <Text style={styles.Article}>{Article}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        marginHorizontal: 20
    },
    UserContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
    },

    Img: {
        width: 300,
        height: 250,
        alignSelf: 'center',
        marginTop: 10
    },

    Profile: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 3
    },

    Header: {
        fontSize: 17,
        color: "#1e90ff",
        fontFamily: "Poppins_Black",
        alignSelf: "center",
    },

    Owner: {
        fontFamily: "Poppins_Medium",
        color: 'grey',
        fontSize: 14,
        marginRight: 0
    },

    Time: {
        fontSize: 12,
        marginLeft: 9
    },

    Article: {
        fontFamily: "Poppins_Medium",
        color: '#353539'
    },
})

export default Preview;
