import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './src/Map';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Messagerie from './src/messagerie/Messagerie';

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Parametres !</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {

  // useEffect(() => {
  //   document.title = `Vous avez cliqué ${count} fois`;
  // });

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
    
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      
      
      <Tab.Screen
        name="Search"
        component={Messagerie}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-search" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
