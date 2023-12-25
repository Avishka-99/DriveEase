import { View, Text, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/User/Home";
import Account from "../screens/User/Account";
export default function AppNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: Dimensions.get("screen").height / 8,
          borderRadius: 30,
          elevation: 5,
          shadowColor: "black",
          shadowOffset: { width: 5, height: 5 },
          backgroundColor: "#fff",
          bottom: 10,
          borderWidth: 3,
          borderTopWidth: 3,
          borderColor: "#76B693",
          borderTopColor: "#76B693",
          width: "98%",
          left: "1%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        //initialParams={{id:props.id}}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "dodgerblue",
          tabBarShowLabel: true,
          //tabBarIcon: ({color, focused}) => <Feather name='home' size={30} color={focused ? '#76B693' : '#8B8B8B'} />,
          // tabBarHideOnKeyboard:true
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "dodgerblue",
          tabBarShowLabel: true,
          //tabBarIcon: ({color, focused}) => <Feather name='search' size={30} color={focused ? '#76B693' : '#8B8B8B'} />,
        }}
      />
    </Tab.Navigator>
  );
}
