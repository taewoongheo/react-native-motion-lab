import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from './constants/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type MainNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const listData: Array<{
  title: string;
  description: string;
  route: keyof RootStackParamList;
}> = [
  {
    title: 'Ripple Effect',
    description: 'Circular ripple animation triggered by background touch',
    route: 'RippleEffect',
  },
  {
    title: 'InlineTextSwap',
    description: 'Swaps inline text with animation on touch or click',
    route: 'InlineTextSwap',
  },
];

const ListItem = ({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.listItem}>
      <View style={styles.bullet}>
        <Text style={styles.dot}>•</Text>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Main = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screen,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text style={styles.title}>Interaction Lab</Text>

      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          keyExtractor={item => item.route.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate(item.route)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    alignSelf: 'center',
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
    width: '100%',
  },
  bullet: {
    marginRight: theme.spacing.sm,
    paddingTop: 2,
  },
  dot: {
    fontSize: 24,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default Main;
