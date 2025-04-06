import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {theme} from '../constants/theme';

const RippleEffect = () => {
  return (
    <View style={styles.container}>
      <Text>Ripple Effect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
});

export default RippleEffect;
