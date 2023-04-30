import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, Feather } from "@expo/vector-icons";

import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import ListOfFlowers from "./src/screens/ListOfFlowers";
import Preview from "./src/screens/Preview";


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="ListOfFlowers"
          component={ListOfFlowers}
          options={{
            title: "Discover",
            headerTintColor: "#1e90ff",
            headerTitleAlign: "center",
            headerLeft: () => {
              return (
                <MaterialCommunityIcons
                  name="dots-grid"
                  size={24}
                  color="black"
                  style={styles.lefticon}
                />
              );
            },
            headerRight: () => {
              return (
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={styles.righticon}
                />
              );
            },
            tabBarIcon: () => {
              return (
                <Ionicons
                  name="ios-home-outline"
                  size={24}
                  color="dodgerblue"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Preview"
          component={Preview}
          options={{
            title: "Explore",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              height: 120,
            },
            headerLeft: () => {
              return (
                <View style={styles.headerBefore}></View>
              )
            },
            headerRight: () => {
              return (
                <View style={styles.iconView}>
                  <FontAwesome
                    name="headphones"
                    size={24}
                    color="black"
                    style={styles.righticon}
                  />
                  <Entypo
                    name="heart-outlined"
                    size={24}
                    color="red"
                    style={styles.righticon}
                  />
                  <Entypo
                    name="share"
                    size={24}
                    color="blue"
                    style={styles.righticon}
                  />
                </View>
              );
            },
            
            tabBarIcon: () => {
              return (
                <AntDesign name="folderopen" size={30} color="dodgerblue" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons name="person-outline" size={24} color="dodgerblue" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => {
              return <Feather name="settings" size={24} color="dodgerblue" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconView: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },

  lefticon: {
    marginLeft: 20,
  },

  righticon: {
    marginRight: 15,
    color: '#353535'
  },

  headerBefore: {
    width: 240,
    height: 200,
    borderTopWidth: 80,
    borderLeftWidth: 10,
    borderRadius: 1,
    borderColor: 'rgb(37, 150, 190)',
    position: 'absolute',
    top: 12,
    left: 0,
  }
});
