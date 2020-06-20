import React from 'react';
import { 
  View, 
  StyleSheet 
} from 'react-native';

// Custom Components
import Header from '../Header';
import Body from './Body'

export default function Settings() {
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <Body/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
});
