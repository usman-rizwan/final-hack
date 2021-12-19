import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = '';


export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      Location.watchPositionAsync({
        timeInterval: 2000,
        distanceInterval: 1
      }, (position) => {
        setLocation(position)
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView region={{
        latitude: location && location.coords.latitude,
        longitude: location && location.coords.longitude,
        latitudeDelta: 0.0000005,
        longitudeDelta: 0.0000005
      }} style={styles.map}>
        {location &&
          <MapView.Marker
            style={{ height: 20, width: 20 }}
            image={require('./assets/marker.png')}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}
          />}

        <MapViewDirections
          strokeColor="pink"
          strokeWidth={4}
          lineDashPattern={[1]}
          origin={{
            latitude: location && location.coords.latitude,
            longitude: location && location.coords.longitude,
          }}
          destination={{
            latitude: 24.9175697,
            longitude: 67.0970104
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          lineCap={"square"}
        />
      </MapView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});