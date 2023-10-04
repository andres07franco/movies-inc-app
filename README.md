
# MOVIE INC APP

Amazing app to explore your favorites movies, building in  React Native.


## Screenshots

![Demo APP](./assets/demo.gif)


## Features Implemted

- FF1: Movie List
- FF2: Movie Detail
- FF3: Add Movie Rating
- FF4: Similar and Recommended Movies

## Architecture & Patterms


### Modules 

| App Modules      |Notes                      |
|------------------|--------------------------|
| @core            | Domain Logic and Data Access |      
| @shared          | Function, hooks, utils, around the app modules except @core |      
| @authentication  | Logics and components related with the authentication in the app |      
| @movies          | Logics and components related with the Movie in the app | 
| @ui-components   | UI Library/Module to use around the app modules with Atomic Design Pattern |    
| @Lib             | Custom implementation for external libraries (D of SOLID)|  

### Highlights

- For The naming convention and The modules and files locations the choice was the Angular Guide Style.

- For get a better organization of the components and apply the S of SOLID I used the Atomic design.

- The Core module organization was inspired by the Onion Architectures.

  <img src='./assets/Onion-View.PNG' width='250'>


### Highlight Libraries

| Target            |Name                      |Notes |
|-------------------|--------------------------|------|
| State Maganement  | jotai                    |I like Redux but this time I wanted to take the opportunity to simplify the state management without all of redux concepts| 
| Navigation        | React Navigation         |      | 
| Unit Tests        | Jest and Testing Library |      | 
| Styling           | Styled Componet          |      | 
| Tanslations       | react-i18next         |      | 

## Previous requirements

- Nodejs
- Expo

## Configuration

Create .env file and add the value for the follow  variables

    EXPO_PUBLIC_API_URL=https://api.themoviedb.org/3
    EXPO_PUBLIC_AUTH_TOKEN=eyxxxxxxxxxxx


## Run

We only need run:

    yarn start


## Test

We only need run:

    yarn test

### Current Coverage 

| File   |      % Stmts      |  % Branch | % Funcs | % Lines |
|----------|:-------------:|------:|------:|------:|
| All files  |  92.7  |   80.32 | 91.37 |93.04|


## References

- [Angular Style Guide ](https://angular.io/guide/styleguide)
- [UI Design](https://dribbble.com/shots/5529233-Movie-App-Interface-Design-Dark-Theme)
- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)