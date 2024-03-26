// MyDrawer.js
import React, { useState, useLayoutEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeStack, AboutStack, CaseStudiesStack, LoginStack } from "./stack";
import { Image, Linking, SafeAreaView, View } from "react-native";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState(false); // State to trigger refresh
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    checkLoginStatus();
  }, [isFocused, refresh]);

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("authToken");
    handleRefresh();
    setIsLoggedOut(token ? false : true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("authToken");
    setIsLoggedOut(true);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
    // console.log("UI Refreshing");
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView
          style={{ flex: 1, paddingTop: 20, backgroundColor: "#99f6e4" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 140,
            }}
          >
            <Image
              style={{ width: 100, resizeMode: "contain" }}
              source={require("../assets/images/logo.png")}
            />
          </View>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Visit my Website"
            onPress={() => Linking.openURL("https://edetdavid.vercel.app")}
            icon={() => <Ionicons name="information" size={22} />}
          />
          {!isLoggedOut && (
            <DrawerItem
              label="Logout"
              onPress={handleLogout}
              icon={() => <AntDesign name="logout" size={22} />}
            />
          )}
          {/* <DrawerItem
            label="Refresh"
            onPress={handleRefresh}
            icon={() => <AntDesign name="retweet" size={22} />}
          /> */}
        </SafeAreaView>
      )}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home" size={22} />,
        }}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          title: "About",
          drawerIcon: () => <AntDesign name="profile" size={22} />,
        }}
      />
      <Drawer.Screen
        name="CaseStudiesStack"
        component={CaseStudiesStack}
        options={{
          title: "Case-Studies",
          drawerIcon: () => <FontAwesome5 name="journal-whills" size={22} />,
        }}
      />

      {isLoggedOut && (
        <Drawer.Screen
          name="login"
          component={LoginStack}
          options={{
            title: "Login",
            drawerIcon: () => <AntDesign name="login" size={22} />,
          }}
        />
      )}
    </Drawer.Navigator>
  );
};
