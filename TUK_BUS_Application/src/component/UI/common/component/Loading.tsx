import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from '../../../../style/stylesheet.css';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default Loading;
