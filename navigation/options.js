import { Ionicons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import logo from "../assets/images/logo.png";

export const navOptions = (nav) => {
  return {
    headerTintColor: "#cbd5e1",
    headerStyle: {
      backgroundColor: "#0f172a",
    },
    headerRight: () => (
      <Ionicons
        style={{ marginRight: 5 }}
        name="menu"
        size={32}
        color="white"
        onPress={() => nav.toggleDrawer()}
      />
    ),
    headerLeft: () => (
      <View>
        <Image
          style={{
            width: 40,
            marginLeft: 10,
            marginRight: 80,
            resizeMode: "contain",
          }}
          source={logo}
        />
      </View>
    ),
  };
};
