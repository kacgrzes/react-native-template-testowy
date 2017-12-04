# Shoplo
> Shoplo is an e-commerce sales channels aggregation app that lets user monitor and control business revenue in all points of sales

## High-level concepts / rules

Project was built with some higher-level concepts in mind:

- FP as main paradigm combined with a few concepts from OOP
- Use Flux, CQRS and Event Sourcing in form of Redux abstraction
- Keep Components granural ([Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)) and have SRP in mind
- Use Storybook as a tool to build components in separated testable environment
- Use [ducks](https://github.com/erikras/ducks-modular-redux) for bundling reducers, action types and actions when using Redux

## Used technologies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Native](https://facebook.github.io/react-native/) - Build mobile apps with React
- [React Native Navigation](https://wix.github.io/react-native-navigation/) - native iOS / Android navigation
- [Redux](https://redux.js.org/) - predictable state container for JavaScript apps
- [Storybook](https://storybook.js.org/) - The UI Development Environment
- [Detox](https://github.com/wix/detox) - Gray Box E2E tests and automation library for mobile apps
- [fastlane](https://fastlane.tools/) - iOS and Android Automation for Continuous Delivery
- [flow](https://flow.org/) - A static type checker for JS

Project uses [standard](https://standardjs.com/) as linter and git hooks to keep consistend code formatting throughtout all project's files

## How to run project

Make sure you have react-native-cli installed (`npm install -g react-native-cli`) then in project's root folder run these commands:

1. `cp .env.example .env`
2. `yarn`
3. `react-native link`
4. `react-native run-ios` / `react-native run-android` to run on specific platform

## How to run storybook

1. `yarn run storybook`
2. go to webpage from CLI output (usually it's `localhost:7007`) 
3. `react-native run-ios` / `react-native run-android` to run on specific platform

## How to run E2E tests

1. `yarn run test-e2e`

FYI: you can change between project and storybook without killing simulator (just run correct JS server: `yarn run storybook` or `yarn`)

