import React from "react";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';




const Home = ({ img, Heading, Owner, Time, User, Article }) => {
  const navigation = useNavigation()
  const [fontsloaded] = useFonts({

    // Poppins_Black: require("../fonts/poppins/Poppins-Bold.ttf"),
    // Poppins_Medium: require("../fonts/poppins/Poppins-Medium.ttf")
  })

  if (!fontsloaded) {
    return null
  }

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Preview', {
            img, Heading, Owner, Time, User, Article
          })
        }}
      >
        <View style={styles.container}>
          <View style={styles.imgBefore}></View>
          <Image source={img} style={styles.img} />
          <View>

            <Text style={styles.topic}>{Heading}</Text>
            <View style={styles.details}>
              <View style={styles.nameAndMinutes}>
                <Image source={User} style={styles.profile} />
                <Text style={styles.author}>{Owner}</Text>
              </View>
              <Text style={styles.minutes}>{Time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15
  },

  imgBefore: {
    width: 65,
    height: 65,
    borderTopWidth: 7,
    borderLeftWidth: 7,
    borderRadius: 1,
    borderColor: 'rgb(37, 150, 190)',
    position: "absolute",
    top: 0,
    left: 0,
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },


  nameAndMinutes: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  img: {
    width: 100,
    height: 100,
    marginRight: 10
  },

  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 3,
    marginTop: 10
  },

  topic: {
    maxWidth: 250,
    fontSize: 17,
    color: "gray",
    fontFamily: "Poppins_Black"
  },

  author: {
    fontFamily: "Poppins_Medium",
    color: 'grey',
    fontSize: 13,
    marginRight: 15,
    marginTop: 10
  },

  minutes: {
    fontSize: 10,
    marginLeft: 1,
    marginTop: 10
  },
})
export default Home;