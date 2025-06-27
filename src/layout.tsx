import {StyleSheet, View} from 'react-native';
import {colors} from './constants/colors';

function Layout({children}: {children: React.ReactNode}): React.JSX.Element {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

export default Layout;
