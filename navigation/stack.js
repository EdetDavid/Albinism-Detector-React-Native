import { createStackNavigator } from "@react-navigation/stack";
import { HomeTabs } from "./tabs";
import AboutScreen from "../screens/about-screen";
import LoginScreen from "../screens/login-screen";
import CaseStudiesScreen from "../screens/case-studies";

import { navOptions } from "./options";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

export const AboutStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export const LoginStack = ({ handleRefresh }) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export const CaseStudiesStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={() => navOptions(navigation)}>
      <Stack.Screen name="Case-Studies" component={CaseStudiesScreen} />
    </Stack.Navigator>
  );
};
