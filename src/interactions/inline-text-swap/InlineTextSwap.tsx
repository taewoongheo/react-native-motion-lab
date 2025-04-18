import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  LinearTransition,
  FadeIn,
  FadeOut,
  FadeInUp,
} from 'react-native-reanimated';

function InlineTextSwap(): React.ReactElement {
  const [variants, setVariants] = useState<string[]>([
    'Frontend',
    'Backend',
    'Fullstack',
    'Devops',
    'Coffee-fueled',
    'Frontend And Backend',
  ]);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const changeWord = (): void => {
    const copy = [...variants];
    const head = copy.shift();
    setVariants([...copy, head || 'not']);
    setIsExpanded(false);
  };

  const dropDown = (): void => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={styles.mainAnimatedContainer}
        layout={LinearTransition.duration(200)}>
        <Text style={styles.staticText}>Hi👋, I'm</Text>

        <View style={styles.textContainer}>
          <TouchableOpacity onPress={dropDown} activeOpacity={0.7}>
            <View style={styles.variantsContainer}>
              <Animated.Text
                style={styles.variantsText}
                key={variants[0]}
                entering={FadeInDown.duration(400).easing(
                  Easing.out(Easing.exp),
                )}>
                {variants[0]}
              </Animated.Text>
            </View>
          </TouchableOpacity>

          {!isExpanded && (
            <Animated.Text
              style={[styles.staticText, styles.inlineDeveloper]}
              entering={FadeIn.duration(300).easing(Easing.out(Easing.quad))}
              exiting={FadeOut.duration(250).easing(Easing.in(Easing.quad))}
              layout={LinearTransition.duration(300).easing(
                Easing.inOut(Easing.ease),
              )}>
              Developer
            </Animated.Text>
          )}

          {isExpanded && (
            <>
              <Animated.View
                style={styles.dropdownContainer}
                layout={LinearTransition.duration(300)}>
                {variants.slice(1).map((variant, index) => (
                  <Animated.View
                    key={index}
                    entering={FadeInUp.duration(1000)
                      .delay(index * 10)
                      .easing(Easing.out(Easing.exp))}
                    exiting={FadeOut.duration(200).easing(
                      Easing.in(Easing.quad),
                    )}
                    layout={LinearTransition.duration(300)}>
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        const newVariants = [
                          variant,
                          ...variants.filter(v => v !== variant),
                        ];
                        setVariants(newVariants);
                        setIsExpanded(false);
                      }}>
                      <Text style={styles.dropdownText}>{variant}</Text>
                    </TouchableOpacity>
                  </Animated.View>
                ))}
              </Animated.View>

              <Animated.Text
                style={[styles.staticText, styles.developerTextExpanded]}
                entering={FadeInUp.duration(400)
                  .delay(variants.length * 25)
                  .easing(Easing.out(Easing.exp))}
                exiting={FadeOut.duration(200).easing(Easing.in(Easing.quad))}
                layout={LinearTransition.duration(400)}>
                Developer
              </Animated.Text>
            </>
          )}
        </View>
      </Animated.View>

      <TouchableOpacity
        onPress={changeWord}
        style={styles.btn}
        activeOpacity={0.7}>
        <Text style={styles.btnText}>change</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  mainAnimatedContainer: {},
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  // drop down
  dropdownContainer: {
    alignSelf: 'flex-start',
  },
  dropdownItem: {
    paddingVertical: 3,
    paddingLeft: 30,
  },
  dropdownText: {
    fontSize: 24,
    fontWeight: 600,
    marginVertical: 5,
  },
  dropdownAndTextContainer: {
    marginTop: 5,
    alignSelf: 'flex-start',
    width: '100%',
  },

  // text
  variantsContainer: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  variantsText: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 5,
  },
  staticText: {
    fontSize: 30,
    fontWeight: '400',
    marginVertical: 5,
  },
  inlineDeveloper: {
    alignSelf: 'baseline',
    lineHeight: 36,
  },
  developerTextExpanded: {
    marginTop: 5,
  },

  // button
  btn: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default InlineTextSwap;
