import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  LinearTransition,
} from 'react-native-reanimated';

const variants = [
  'Frontend',
  'Backend',
  'Fullstack',
  'Devops',
  'Coffee-fueled',
  'Frontend And Backend',
];

function InlineTextSwap(): React.ReactElement {
  const [idx, setIdx] = useState<number>(0);

  const tapHandler = () => {
    setIdx((idx + 1) % variants.length);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.staticText, styles.intro]}>Hi👋, I'm</Text>
      <View style={styles.textContainer}>
        <View>
          <TouchableOpacity onPress={tapHandler}>
            <View style={styles.variantsContainer}>
              <Animated.Text
                style={styles.variantsText}
                key={idx}
                entering={FadeInDown.duration(400).easing(
                  Easing.out(Easing.exp),
                )}>
                {variants[idx]}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text> </Text>
        <Animated.Text
          style={styles.staticText}
          layout={LinearTransition.duration(250)}>
          Developer
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    alignItems: 'flex-start',
  },
  intro: {
    paddingLeft: 30,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  variantsContainer: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  variantsText: {
    fontSize: 30,
    fontWeight: 600,
    marginVertical: 5,
  },
  staticText: {
    fontSize: 30,
    fontWeight: 400,
    marginVertical: 5,
  },
});

export default InlineTextSwap;
