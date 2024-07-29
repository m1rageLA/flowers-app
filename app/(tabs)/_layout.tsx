import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  MaterialCommunityIcons,
  Ionicons,
  Foundation,
} from "@expo/vector-icons";
import { variables } from "../../assets/variables";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={
                focused ? variables.BUTTONS.ACTIVE : variables.BUTTONS.DEFAULT
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="allChats"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="chatbox"
              size={24}
              color={
                focused ? variables.BUTTONS.ACTIVE : variables.BUTTONS.DEFAULT
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Foundation
              name="list"
              size={24}
              color={
                focused ? variables.BUTTONS.ACTIVE : variables.BUTTONS.DEFAULT
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="settings-sharp"
              size={24}
              color={
                focused ? variables.BUTTONS.ACTIVE : variables.BUTTONS.DEFAULT
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="detail"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
