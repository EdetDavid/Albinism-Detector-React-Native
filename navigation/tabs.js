import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home-screen";
import AiFormScreen from "../screens/ai-form-screen";
import ContactScreen from "../screens/contact-screen";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarActiveTintColor: "#047aed",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeTabs") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "AiForm") {
            iconName = focused ? "robot" : "robot";
          } else if (route.name === "Contact") {
            iconName = focused ? "phone" : "phone";
          }
          return (
            <FontAwesome5
              name={iconName}
              size={focused ? 35 : size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTabs"
        options={{ title: "Home" }}
        component={HomeScreen}
      />
      <Tab.Screen name="AiForm" component={AiFormScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};
