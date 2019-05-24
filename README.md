# First Challenge

This is the first challenge of the React Native Mastermind.

The main task is to create an application that features basic CRUD operations. No API-integration is needed, nor any kind of fancy/advanced technology.

This application is a simple todo app that features the following:
1. CRUD operations (you can create, edit and delete all todos)
2. Color separation (completed todos have reduced opacity)
3. Data persistance (even if you close the app, the data will remain in there)
4. Filter all todos by completed, active and all
5. Redux integration

It uses styled-components for styling and Reactotron for debugging.

It aims to show how to build a simple React Native application from scratch that has basic CRUD features.

## Screenshots

<img src="/assets_github/HomePage.jpeg" height="570">
<img src="/assets_github/AddTodoPage.jpeg" height="570">
<img src="/assets_github/EditTodoPage.jpeg" height="570">
<img src="/assets_github/FilterActionSheet.jpeg" height="570">
<img src="/assets_github/FilteredHomePage.jpeg" height="570">
<img src="/assets_github/DeleteModal.jpeg" height="570">

# Installation

To install this application, first you have to make sure that you have set your environment to support React Native.

For information on how to set up react-native, see the official documentation: https://facebook.github.io/react-native/docs/getting-started

First, clone this repository. Execute this command:

```
git clone https://github.com/rodriigovieira/rn-challenge-1
```

Then, install all dependencies of this project. Execute this command:

```
yarn install
```

PS: this command assumes you have yarn installed globally. If you don't, simply run `npm -g install yarn`.

Finally, to start the project, run one of the following commands:

```
yarn ios
```

OR

```
yarn android
```

`yarn ios` will build the project in the iOS simulator. You must be on a Mac and have XCode installed.

`yarn android` will build the project in the Android simulator. You must have either Android Studio or some other software to run the Android Emulator.
