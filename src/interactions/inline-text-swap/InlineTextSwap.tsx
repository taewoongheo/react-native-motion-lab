import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  LinearTransition,
  FadeOut,
  FadeInUp,
} from 'react-native-reanimated';

const LAYOUT_DURATION = 300;
const EXIT_DURATION = 1;

function InlineTextSwap(): React.ReactElement {
  const [variants, setVariants] = useState<string[]>([
    'Frontend',
    'Backend',
    'Fullstack',
    'Devops',
    'Coffee-fueled',
  ]);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

  // 드롭다운 토글 핸들러 수정
  const dropDown = (): void => {
    if (isExpanded) {
      setIsAnimatingOut(true);

      setTimeout(() => {
        setIsExpanded(false);
        setIsAnimatingOut(false);
      }, EXIT_DURATION);
    } else {
      setIsExpanded(true);
    }
  };

  const changeWord = (): void => {
    const copy = [...variants];
    const head = copy.shift();
    setVariants([...copy, head || 'not']);
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={styles.mainAnimatedContainer}
        layout={LinearTransition.duration(LAYOUT_DURATION)}>
        <Text style={styles.staticText}>Hi👋, I'm</Text>

        <View style={styles.textContainer}>
          <TouchableOpacity onPress={dropDown} activeOpacity={0.7}>
            <View style={styles.variantsContainer}>
              <Animated.Text
                style={styles.variantsText}
                key={variants[0]}
                entering={FadeInDown.duration(500).easing(
                  Easing.out(Easing.exp),
                )}>
                {variants[0]}
              </Animated.Text>
            </View>
          </TouchableOpacity>

          {!isExpanded && !isAnimatingOut && (
            <Animated.Text
              style={[styles.staticText, styles.inlineDeveloper]}
              entering={FadeInDown.duration(LAYOUT_DURATION / 2).easing(
                Easing.out(Easing.exp),
              )}
              layout={LinearTransition.duration(LAYOUT_DURATION).easing(
                Easing.inOut(Easing.ease),
              )}>
              Developer
            </Animated.Text>
          )}

          {(isExpanded || isAnimatingOut) && (
            <>
              <Animated.View
                style={styles.dropdownContainer}
                entering={FadeInDown.duration(LAYOUT_DURATION).easing(
                  Easing.out(Easing.exp),
                )}
                exiting={FadeOut.duration(EXIT_DURATION).easing(
                  Easing.in(Easing.quad),
                )}
                layout={LinearTransition.duration(EXIT_DURATION)}>
                {variants.slice(1).map((variant, index) => (
                  <Animated.View
                    key={index}
                    entering={FadeInUp.duration(800)
                      .delay(index * 10)
                      .easing(Easing.out(Easing.exp))}
                    exiting={FadeOut.duration(EXIT_DURATION).easing(
                      Easing.in(Easing.quad),
                    )}
                    layout={LinearTransition.duration(EXIT_DURATION)}>
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        const newVariants = [
                          variant,
                          ...variants.filter(v => v !== variant),
                        ];
                        setVariants(newVariants);

                        setIsAnimatingOut(true);
                        setTimeout(() => {
                          setIsExpanded(false);
                          setIsAnimatingOut(false);
                        }, EXIT_DURATION);
                      }}>
                      <Text style={styles.dropdownText}>{variant}</Text>
                    </TouchableOpacity>
                  </Animated.View>
                ))}
              </Animated.View>

              <Animated.Text
                style={[styles.staticText, styles.developerTextExpanded]}
                entering={FadeInUp.duration(LAYOUT_DURATION)
                  .delay(variants.length * 25)
                  .easing(Easing.out(Easing.exp))}
                exiting={FadeOut.duration(EXIT_DURATION).easing(
                  Easing.in(Easing.quad),
                )}
                layout={LinearTransition.duration(EXIT_DURATION)}>
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
    width: '100%',
    overflow: 'hidden', // 중요: 내부 콘텐츠가 컨테이너를 넘지 않도록 함
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
