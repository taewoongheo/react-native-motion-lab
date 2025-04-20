# React Native Interaction Lab

This repository is a personal lab for exploring interaction and animation in React Native. It focuses on recreating real-world UI patterns and motion effects — to practice how they actually work. Through small, focused prototypes, it’s a space for technical curiosity and hands-on learning with libraries like [Reanimated](https://github.com/software-mansion/react-native-reanimated), [Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler), and [Skia](https://github.com/Shopify/react-native-skia)

## Getting started

If you haven't already set up a React Native environment, follow the [React Native Without Expo guide](https://reactnative.dev/docs/set-up-your-environment).

You also need to set up the following libraries manually:

- [Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started)
- [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)
- [Skia](https://shopify.github.io/react-native-skia/docs/getting-started/installation)

### Install dependencies

```
npm install
```

### Install iOS pods

```
cd ios && pod install && cd ..
```

### Run the app

- ios

```
npm run ios
```

- android

```
npm run android
```

## Works

### [Inline Text Swap](https://github.com/taewoongheo/react-native-interaction-lab/blob/main/src/interactions/inline-text-swap/InlineTextSwap.tsx)

Swaps inline text on touch

<p> 
<video src="https://private-user-images.githubusercontent.com/127009780/435233366-abd7cf2f-2ff3-46dd-828c-469108452701.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ5ODk5NDgsIm5iZiI6MTc0NDk4OTY0OCwicGF0aCI6Ii8xMjcwMDk3ODAvNDM1MjMzMzY2LWFiZDdjZjJmLTJmZjMtNDZkZC04MjhjLTQ2OTEwODQ1MjcwMS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxOFQxNTIwNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZDVmYzMyNjJlMDc5NDM3YzA5ZGYzNjliNDFlOWY2ZDNlZjUxNjUzZWI0OWNlNTMxMGVhMTIyYmZjOTEwNjA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9_8lcZ71PpEuolMOjP1BKkIWxwCTTkJqVn7aGckg0Rw" controls muted playsinline width="300" />
</p>

### [Ripple Effect](https://github.com/taewoongheo/react-native-interaction-lab/blob/main/src/interactions/ripple-effect/RippleEffect.tsx)

Circular ripple animation triggered by background touch

<p>
<video src="https://private-user-images.githubusercontent.com/127009780/435233342-608027ab-1bfe-4738-9a15-f9b7b89218fe.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ5ODk3NDAsIm5iZiI6MTc0NDk4OTQ0MCwicGF0aCI6Ii8xMjcwMDk3ODAvNDM1MjMzMzQyLTYwODAyN2FiLTFiZmUtNDczOC05YTE1LWY5YjdiODkyMThmZS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxOFQxNTE3MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NTA0NmE5ZmNlMDlmMjY2OWFlNTZkNDQ2MTNlNmYxMmVhYzQwZTEzMmU2ODkyZTM0YWNlZjZkM2EzMWM4NTkwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.STvkfdZg7imswCyGfE_Fsa3VxoDWvyK-h3p0tH9Kv20" controls muted playsinline width="300" />
</p>
