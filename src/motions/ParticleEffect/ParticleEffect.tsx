import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Layout from '../../layout';
import {Canvas, Circle, vec} from '@shopify/react-native-skia';
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {
  useDerivedValue,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';
import {PanGestureHandlerEventPayload} from 'react-native-screens';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const c = vec(width / 2, height / 2);
const r = 5;

const INFLUENCE_DISTANCE = 100;

// physics constants
const RESTORE_FORCE = 0.02; // restore force
const FRICTION = 0.97; // friction (0.95-0.99)
const PUSH_FORCE = 30; // push force when tapped
const SPEED_SCALE = 0.3; // speed scale

function ParticleEffect(): React.JSX.Element {
  // actual physics position and velocity
  const px = useSharedValue(c.x);
  const py = useSharedValue(c.y);
  const vx = useSharedValue(0); // x-axis velocity
  const vy = useSharedValue(0); // y-axis velocity

  // physics simulation loop - useFrameCallback
  useFrameCallback(() => {
    // calculate restore force to return to origin
    const restoreX = (c.x - px.value) * RESTORE_FORCE;
    const restoreY = (c.y - py.value) * RESTORE_FORCE;

    // apply force to velocity (acceleration)
    vx.value += restoreX;
    vy.value += restoreY;

    // apply friction (velocity decrease)
    vx.value *= FRICTION;
    vy.value *= FRICTION;

    // update position (apply velocity)
    px.value += vx.value * SPEED_SCALE;
    py.value += vy.value * SPEED_SCALE;
  });

  // rendering position
  const position = useDerivedValue(() => {
    return vec(px.value, py.value);
  });

  const particleMove = (
    e:
      | GestureUpdateEvent<PanGestureHandlerEventPayload>
      | GestureUpdateEvent<TapGestureHandlerEventPayload>,
  ) => {
    'worklet';

    const tx = e.x;
    const ty = e.y;

    // calculate distance from current position to touch position
    const dx = tx - px.value;
    const dy = ty - py.value;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < INFLUENCE_DISTANCE) {
      const minDistance = 10;
      const safeDistance = Math.max(distance, minDistance);

      // normalized direction vector
      const normalizedDx = dx / safeDistance;
      const normalizedDy = dy / safeDistance;

      // calculate force
      const forceMultiplier = INFLUENCE_DISTANCE / safeDistance;
      const pushForce = PUSH_FORCE * forceMultiplier;

      // apply force in opposite direction of touch (immediately to velocity)
      vx.value -= normalizedDx * pushForce;
      vy.value -= normalizedDy * pushForce;
    }
  };

  const tap = Gesture.Tap().onStart(e => particleMove(e));

  const pan = Gesture.Pan()
    .onBegin(e => {
      particleMove(e);
    })
    .onUpdate(e => {
      particleMove(e);
    });

  const combinedGesture = Gesture.Race(tap, pan);

  return (
    <Layout>
      <GestureDetector gesture={combinedGesture}>
        <Canvas style={styles.container}>
          <Circle c={position} r={r} color="red" />
        </Canvas>
      </GestureDetector>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'rgb(208, 235, 237)',
  },
});

export default ParticleEffect;
