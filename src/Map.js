import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';


export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

//      let locations = await Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 1000, distanceInterval: 1 }, (loc) => setLocation(loc));
      let location = await Location.getCurrentPositionAsync({accuracy: 2});

      setLocation(location);
    })(); 
  }, []);

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
 
    var carte = <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation='true'
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      }}
    >
      </MapView> 
  }

  return (
    <View style={styles.container}>
      {carte}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    height: '100%',
    width: '100%'
  }

});