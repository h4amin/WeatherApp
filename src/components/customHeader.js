import React from 'react';
import { Text, StyleSheet, SafeAreaView, View} from 'react-native';

import { StatusBar, Platform } from 'react-native';

const CustomHeader = ({ title, backgroundColor }) => {
  const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

  return (
    <View>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <SafeAreaView
        style={[
          styles.headerContainer,
          { backgroundColor: 'white', paddingBottom: 30, paddingTop: 50},
        ]}
      >
        <Text style={styles.headerTitle}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 2,
    borderColor: 'indianred',
    padding: 1,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'indianred',
    textAlign: 'center',
    padding: 0
  },
});

export default CustomHeader;
